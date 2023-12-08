import { Motion } from 'motion/types/vue';

export type ReturnAnimationType = InstanceType<typeof Motion>['$props'];

export type AnimType = 'slide' | 'scale' | 'scaleOut' | 'slideScale' | 'slideScaleLeft' | 'static';

export type Frame = {
    imgUrl?: string;
    duration: number;
    animation?: AnimType;
    bgUrl?: string;
    notRepeatable?: boolean;
    class?: string;
};
