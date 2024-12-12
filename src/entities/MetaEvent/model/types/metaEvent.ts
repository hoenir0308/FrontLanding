export interface MetaEvent {
 id: string;
 summary: string;
 text: string;
 emotional: number;
 date: Date;
}

export enum MetaEventEmotional {
  best = 'BEST',
  positive = 'POSITIVE',
  neutral = 'NEUTRAL',
  negative = 'NEGATIVE',
  worst = 'WORST',
}

export const MetaEventEmotionalRange: Record<MetaEventEmotional, number[]> = {
    [MetaEventEmotional.best]: [61, 100],
    [MetaEventEmotional.positive]: [21, 60],
    [MetaEventEmotional.neutral]: [-20, 20],
    [MetaEventEmotional.negative]: [-60, -21],
    [MetaEventEmotional.worst]: [-100, -61],
}

export type MetaEventGridBlock = MetaEvent & {
    position: number[];
    children?: number[][];
}
