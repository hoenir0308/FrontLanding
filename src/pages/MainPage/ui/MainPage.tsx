import { classNames } from 'src/shared/lib/classNames/classNames';
import {memo, useEffect, useState, WheelEvent} from 'react';
import {useThrottle} from "src/shared/lib/hooks/useThrotte/useThrotle.ts";
import cls from './MainPage.module.scss';
import {Header} from "src/widgets/Header";
// icons

// @ts-ignore
import BrandAnalyticsIcon from "src/shared/assets/icons/opponents/BrandAnalytics.svg?react";
// @ts-ignore
import Crib from "src/shared/assets/icons/opponents/Crib.svg?react";
// @ts-ignore
import Integrum from "src/shared/assets/icons/opponents/Integrum.svg?react";
// @ts-ignore
import Medialogic from "src/shared/assets/icons/opponents/Medialogic.svg?react";
// @ts-ignore
import PressIndex from "src/shared/assets/icons/opponents/PressIndex.svg?react";
// @ts-ignore
import ScanInterfax from "src/shared/assets/icons/opponents/ScanInterfax.svg?react";
// @ts-ignore
import AvalancheIcon from "src/shared/assets/icons/opponents/avalanche.svg?react";
import {AboutSection} from "./AboutSection/AboutSection";
import {EventsSection} from "./EventsSection/EventsSection.tsx";
import {ScrollSection} from "./ScrollSection/ScrollSection.tsx";
import {BrightSection} from "./BrightSection/BrightSection.tsx";
import {Footer} from "src/widgets/Footer";
import {ContactButton} from "src/pages/MainPage/ui/ContactButton/ContactButton.tsx";

export const MainPage = memo(() => {
    const [isPromoAnimated, setIsPromoAnimated] = useState(false);
    console.log('render');

    const onScrollPromo = useThrottle((e: WheelEvent) => {
        console.log('wheel-start');
        if (!isPromoAnimated && e.deltaY > 0) {
            setIsPromoAnimated(true);
            setTimeout(() => {
                document.getElementById('#intro-section')?.scrollIntoView({ behavior: 'smooth'});
                document.body.setAttribute('id', 'allow-scroll' );
            }, 500);
            window.removeEventListener("wheel", onScrollPromo);
        }
    }, 500);

    useEffect(() => {
        if (!isPromoAnimated) {
            window.addEventListener("wheel", onScrollPromo);
            window.addEventListener("touchmove", onScrollPromo);
        }
        return () => {
            window.removeEventListener("wheel", onScrollPromo);
            window.removeEventListener("touchmove", onScrollPromo);
        }
    }, [onScrollPromo, isPromoAnimated])


    return (
        <>
            <Header />
            <main className={cls.MainPage}>
                <section className={classNames(cls.promoSection)}>
                    <div className={cls.promoSectionContent}>
                        <h1 className={cls.mainTitleText}>
                            Отслеживаем информационное поле
                        </h1>
                        <span className={cls.runes}>
                            <span className={cls.eye}/>
                            <span className={cls.vega}/>
                            {isPromoAnimated && <circle className={cls.eyePupil}/>}
                        </span>
                        <div className={cls.promoSectionInfo}>
                            <div className={cls.opponents}>
                                <a className={cls.avalancheIcon} target="_blank" href='https://avl.team'><AvalancheIcon/></a>
                                <ul>
                                    <li>
                                        <a target="_blank" href='https://brandanalytics.ru'>
                                            <BrandAnalyticsIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href='https://pressindex.ru'>
                                            <PressIndex/>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href='https://www.mlg.ru'>
                                            <Medialogic/>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href='https://www.kribrum.ru'>
                                            <Crib/>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href='https://scan-interfax.ru'>
                                            <ScanInterfax/>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href='https://integrum.ru/monitoring-smi'>
                                            <Integrum/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p className={cls.promoSectionText}>
                                Искусственный интеллект на службе предсказания новостей.
                            </p>
                            {!isPromoAnimated && <button className={cls.callButton}>
                                <p>Связаться с дежурным</p>
                            </button>}
                        </div>
                    </div>
                </section>
                <section className={classNames(cls.introSection)} id='#intro-section'>
                    <div className={cls.introSectionContent}>
                        <span className={cls.introTextBg}/>
                        <p className={cls.introText}>
                            В эпоху цифровой трансформации каждая секунда на вес золота, и каждый инсайт может стать
                            ключевым преимуществом.
                            С Hoenir ваш бизнес получает доступ к мощнейшим инструментам анализа данных, способным не
                            только
                            отслеживать текущие события,
                            но и распознавать скрытые тренды в океане информации. Представьте себе, что вы знаете о
                            грядущих
                            изменениях до того,
                            как они произойдут, и имеете возможность реагировать быстрее конкурентов.
                        </p>
                    </div>
                </section>
                <AboutSection />
                <EventsSection />
                <ScrollSection />
                <BrightSection />
                <ContactButton isPromoAnimated={isPromoAnimated} />
            </main>
            <Footer/>
        </>
    );
});

export default MainPage;
