import { classNames } from 'src/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MetaEventCard.module.scss';
import {timestampToString} from "src/shared/lib/helpers/dateHelpers/timestampToString.ts";
import {MetaEventEmotional, MetaEventEmotionalRange, MetaEventGridBlock} from "src/entities/MetaEvent";
import {CardVector} from "src/entities/MetaEvent/ui/styles/CardVector.tsx";

export interface IMetaEventCard {
    metaEvent: MetaEventGridBlock;
}

export const MetaEventCard = memo(({ metaEvent }: IMetaEventCard) => {
    const { summary, text, emotional, date = new Date(), position , children } = metaEvent;
    const emotionalType =
        (Object.entries(MetaEventEmotionalRange)
            .filter((range) => emotional >= range[1][0] && emotional <= range[1][1])[0][0]
        || MetaEventEmotional.neutral).toLowerCase();
    console.log(emotionalType);

    const editStringText = (t: string): string[] => {
        const stringLen = 31;
        let border = stringLen;
        for (let i = stringLen; i >= 0; i--) {
            if (t[i] === ' ') {
                border--;
                break;
            }
            border--;
        }
        return [t.slice(0, border + 1), t.slice(border + 1, border + stringLen) + '...'];
    }

    return (
        <li
            className={classNames(cls.MetaEvent, {}, [cls[emotionalType as string]])}
            style={{
                gridColumnStart: `${position[0] + 1}`,
                gridRowStart: `${position[1] + 1}`
            }}
        >
            <div className={cls.topContainer}>
                <p className={cls.status}>
                    <span className={classNames(cls.statusMarker, {}, [cls[emotionalType as string]])}/>
                    Статус новости
                </p>
                <h4 className={cls.title}>{summary}</h4>
            </div>
            <div className={cls.bottomContainer}>
                {
                    editStringText(text).map((t) => (
                        <p key={t} className={cls.text}>{t}</p>
                    ))
                }
                <div className={cls.footer}>
                    <p className={classNames(cls.emotional, {}, [cls[emotionalType as string]])}>
                        <span/>{emotional.toString()}
                    </p>
                    <p className={cls.date}>{timestampToString(date)}</p>
                </div>
            </div>
            {
                children?.map((childrenPosition) => (
                    <CardVector
                        key={childrenPosition[0].toString() + childrenPosition[1].toString()}
                        position={childrenPosition} parentPosition={position}
                    />
                ))
            }
        </li>
    );
});

export default MetaEventCard;
