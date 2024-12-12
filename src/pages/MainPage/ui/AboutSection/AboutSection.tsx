import { classNames } from 'src/shared/lib/classNames/classNames';
import React, {memo, TouchEvent, useEffect, useRef, useState, WheelEvent} from 'react';
import cls from './AboutSection.module.scss';
import {useThrottle} from "src/shared/lib/hooks/useThrotte/useThrotle.ts";
import {useWindowSize} from "src/shared/lib/hooks/useWindowSize/useWindowResize.ts";

type listItem = {
    id: number;
    title: string;
    text: string;
    eyeClass: string;
}

const listItems: listItem[] = [
    {
        id: 0,
        title: 'Отслеживаем события',
        text: 'Мы собираем данные из множества надежных источников, включая новостные сайты, ' +
            'социальные сети и блоги, чтобы всегда быть в курсе самых актуальных и значимых событий в мире.',
        eyeClass: 'orangeEyeItem',
    },
    {
        id: 1,
        title: 'Создаем тренды',
        text: 'Мы собираем данные из множества надежных источников, включая новостные сайты, ' +
            'социальные сети и блоги, чтобы всегда быть в курсе самых актуальных и значимых событий в мире.',
        eyeClass: 'blueEyeItem',
    },
    {
        id: 2,
        title: 'Успешно прогнозируем',
        text: 'Мы собираем данные из множества надежных источников, включая новостные сайты, ' +
            'социальные сети и блоги, чтобы всегда быть в курсе самых актуальных и значимых событий в мире.',
        eyeClass: 'yellowEyeItem',
    }
]

const bodyStyles = window.getComputedStyle(document.body);
const animationDuration = Number(bodyStyles.getPropertyValue('--duration-about-list').slice(0, -1));

export const AboutSection = memo(() => {
    const [idItemAcitve, setIdItemActive] = useState(0);
    const sectionRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const size = useWindowSize();
    const [touchStart, setTouchStart] = useState(0);

    console.log('render');

    const onListScroll = useThrottle((event:  WheelEvent) => {
        console.log('scroll');
        document.getElementById('#about-section')?.scrollIntoView({ behavior: 'smooth', block: 'center'});
        if (event.deltaY > 0) {
            if (idItemAcitve >= 0 && idItemAcitve < 2) {
                setIdItemActive(idItemAcitve + 1)
            } else {
                document.getElementById('#events-content')?.scrollIntoView({ behavior: 'smooth', block: 'center'});
            }
        } else {
            if (idItemAcitve > 0 && idItemAcitve <= 2) {
                setIdItemActive(idItemAcitve - 1);
            } else {
                document.getElementById('#intro-section')?.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }
    }, Number(animationDuration) + 1000);

    const onTouchStart = useThrottle((event:  TouchEvent) => {
        setTouchStart(event.touches[0].clientY);
    }, Number(animationDuration) + 700);

    const onListTouch = useThrottle((event:  TouchEvent) => {
        console.log(touchStart);
        if (event.touches[0].clientY - touchStart > 0) {
            if (idItemAcitve >= 0 && idItemAcitve < 2) {
                setIdItemActive(idItemAcitve + 1)
            }
        } else {
            if (idItemAcitve > 0 && idItemAcitve <= 2) {
                setIdItemActive(idItemAcitve - 1)
            }
        }
    }, Number(animationDuration) + 700);

    const onMouseEnter = useThrottle(() => {
        console.log('enter');
        if (size.width > 320) {
            document.body.setAttribute('id', 'disallow-scroll');
        } else {
            document.body.setAttribute('id', 'allow-scroll');
        }
    }, 300);

    const onMouseLeave = useThrottle(() => {
        console.log('leave');
        if (size.width > 320) {
            document.body.setAttribute('id', 'allow-scroll');
        }
    }, 300);

    useEffect(() => {
        const element = sectionRef.current;
        element.addEventListener("wheel", onListScroll);
        element.addEventListener("touchstart", onTouchStart);
        element.addEventListener("touchmove", onListTouch);
        return () => {
            element.removeEventListener("wheel", onListScroll);
            element.removeEventListener("touchstart", onTouchStart);
            element.removeEventListener("touchmove", onListTouch);
        }
    }, [onListScroll, size, onTouchStart, onListTouch]);

    return (
        <section className={classNames(cls.aboutSection)} ref={sectionRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={cls.aboutSectionWrapper}>
                <div className={cls.aboutSectionContainer} id="#about-section">
                    <ul className={cls.aboutSectionList}>
                        {listItems.map((item) => (
                            <li
                                className={
                                    classNames(
                                        cls.aboutSectionItem, {[cls.aboutSectionItemActive]: idItemAcitve === item.id}
                                    )
                                }
                                onClick={() => setIdItemActive(item.id)}
                                key={item.id}
                            >
                                <h2>{item.title}</h2>
                                <p className={cls.aboutSectionText}>{item.text}</p>
                            </li>
                        ))
                        }
                    </ul>
                    <div className={cls.scrollEyesListContainer}>
                        <ul
                            className={classNames(cls.scrollEyesList, {}, [
                                cls[listItems.find((item) => item.id === idItemAcitve)?.eyeClass + 'Active']
                            ])}>
                            {listItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={
                                        classNames(
                                            '', {[cls.eyeItemActive]: idItemAcitve === item.id}, [cls[item.eyeClass]]
                                        )
                                    }
                                />
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
});
