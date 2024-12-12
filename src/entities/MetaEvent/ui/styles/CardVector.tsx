import {memo} from 'react';
import cls from './CardVector.module.scss';

interface drawVectorProps {
    position: number[];
    parentPosition: number[];
}

const bodyStyles = window.getComputedStyle(document.body);
const cardWidth = Number(bodyStyles.getPropertyValue('--width-event-card').slice(0, -2));
const cardHeight = Number(bodyStyles.getPropertyValue('--height-event-card').slice(0, -2));
const gap = Number(bodyStyles.getPropertyValue('--gap-card-tree').slice(0, -2));
const vectorWidth = (cardWidth + gap);
const vectorRadius = 5;

export const CardVector = memo((props: drawVectorProps) => {
    const {position, parentPosition} = props;
    const deltaPos = position.map((children, index) => children - parentPosition[index]);
    const lineWidth = (vectorWidth - vectorRadius * 2) * Math.abs(deltaPos[0]) - gap;
    const deltaPosX = deltaPos[0] > 0 ? gap / 2 * deltaPos[0] + cardWidth / 2 - gap / 4 : deltaPos[0] * vectorWidth / 2 + gap / 4 * deltaPos[0];

    if (deltaPos[0] !== 0 && deltaPos[1] !== 0) {
        return (
            <span className={cls.container} style={
                {
                    top: `${cardHeight / 2 - 20 + (cardHeight / 2 + 4) * deltaPos[1]}px`,
                    left: `${deltaPosX}px`,
                    transform: `scale(${-deltaPos[0] / Math.abs(deltaPos[0])}, ${-deltaPos[1]})`
                }
            }>
                <svg width={vectorRadius * 2 + lineWidth + 5} height={gap}
                    viewBox={`0 0 ${vectorRadius * 2 + lineWidth + 5} ${gap}`}>
                    <path
                        d={`M2.5,0 v${gap / 4 - 1} a5,5 1 0 0 5,5 h${lineWidth} a5,5 0 0 1 5,5 v${gap / 4 - 1}`}
                        fill="none" strokeWidth="5"
                        stroke="url(#paint0_radial_1)" strokeOpacity="0.3"
                    />
                    <defs>
                        <radialGradient id="paint0_radial_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(-100 16.6071) scale(200 68.3063)">
                            <stop stopColor="#E2F1FF"/>
                            <stop offset="0.410952" stopColor="#5E6882"/>
                            <animate attributeName="cx" type="translate" values={`${Math.abs(deltaPos[0]) * 3};0`}
                                dur="3s" repeatCount="indefinite"/>
                        </radialGradient>
                    </defs>
                </svg>
            </span>
        )
    }
    if (deltaPos[0] === 0) {
        return (
            <span className={cls.container} style={
                {
                    left: `${cardWidth / 2 - gap / 4}px`,
                    top: `${deltaPos[1] < 1 ? (cardHeight * (deltaPos[1] + 1) - gap + 7) : (cardHeight * deltaPos[1] -deltaPos[1] / Math.abs(deltaPos[1]) * gap / 2)}px`,
                    transform: `scaleY(${-deltaPos[1] / Math.abs(deltaPos[1])})`,
                }
            }>
                <svg width="5" height={gap} viewBox={`0 0 5 ${gap}`}>
                    <path
                        d={`M2.5,0 v${gap - 7}`}
                        fill="none" strokeWidth="5"
                        stroke="url(#paint0_radial_2)" strokeOpacity="0.3"
                    />
                    <defs>
                        <radialGradient id="paint0_radial_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(0 -20) scale(200.582 68.3063)">
                            <stop stopColor="#E2F1FF"/>
                            <stop offset="0.410952" stopColor="#5E6882"/>
                            <animate attributeName="cy" type="translate" values={`2;0`}
                                dur="1.5s" repeatCount="indefinite"></animate>
                        </radialGradient>
                    </defs>
                </svg>
            </span>
        )
    }
    if (deltaPos[1] === 0) {
        return (
            <span className={cls.container} style={
                {
                    left: `${deltaPos[0] < 0 ? ((deltaPos[0] + 1) * cardWidth) - gap : (deltaPos[0] * cardWidth)}px`,
                    top: `${cardHeight / 2 - gap / 2}px`,
                    transform: `scaleX(${-deltaPos[0] / Math.abs(deltaPos[0])})`
                }
            }>
                <svg height="5" width={gap} viewBox={`0 0 ${gap} 5`}>
                    <path
                        d={`M0,2.5 h${gap}`}
                        fill="none" strokeWidth="5"
                        stroke="url(#paint0_radial_3)" strokeOpacity="0.3"
                    />
                    <defs>
                        <radialGradient id="paint0_radial_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(-70 16.6071) scale(200.582 68.3063)">
                            <stop stopColor="#E2F1FF"/>
                            <stop offset="0.410952" stopColor="#5E6882"/>
                            <animate attributeName="cx" type="translate" values={`2;0`}
                                dur="1.5s" repeatCount="indefinite"></animate>
                        </radialGradient>
                    </defs>
                </svg>
            </span>
        )
    }
});
