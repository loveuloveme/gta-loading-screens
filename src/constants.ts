import { AnimType, Frame, ReturnAnimationType } from './types';

export const animations: Record<AnimType, ReturnAnimationType> = {
    scale: {
        initial: { scale: 1 },
        animate: { scale: 1.2 },
    },
    slideScale: {
        initial: { scale: 1, x: 0 },
        animate: { scale: 1.05, x: 100 },
    },
    slide: {
        initial: { x: 0 },
        animate: { x: 100 },
    },
    slideScaleLeft: {
        initial: { scale: 1, x: 100 },
        animate: { scale: 1.05, x: -100 },
    },
    static: {},
    scaleOut: {
        initial: { scale: 1 },
        animate: { scale: 0.5 },
    },
};

export const frames: Frame[] = [
    {
        imgUrl: new URL('@/assets/logos/1.png', import.meta.url).href,
        animation: 'scaleOut',
        notRepeatable: true,
        class: 'logo-screen',
        duration: 4000,
    },
    {
        imgUrl: new URL('@/assets/logos/2.png', import.meta.url).href,
        animation: 'scaleOut',
        notRepeatable: true,
        class: 'logo-screen',
        duration: 3200,
    },
    {
        imgUrl: new URL('@/assets/logos/gta.png', import.meta.url).href,
        animation: 'static',
        notRepeatable: true,
        class: 'logo-screen logo-screen--gta',
        duration: 3200,
    },
    {
        duration: 2000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/1.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/1.png', import.meta.url).href,
        animation: 'scale',
        class: 'character-screen',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/2.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/2.png', import.meta.url).href,
        animation: 'scale',
        class: 'character-screen',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/3.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/3.png', import.meta.url).href,
        animation: 'slideScale',
        class: 'character-screen character-screen--left',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/4.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/4.png', import.meta.url).href,
        animation: 'slide',
        class: 'character-screen character-screen--right',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/5.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/5.png', import.meta.url).href,
        animation: 'scale',
        class: 'character-screen',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/6.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/6.png', import.meta.url).href,
        animation: 'scale',
        class: 'character-screen',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/7.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/7.png', import.meta.url).href,
        animation: 'scale',
        class: 'character-screen',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/8.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/8.png', import.meta.url).href,
        animation: 'slideScaleLeft',
        class: 'character-screen character-screen--right',
        duration: 8000,
    },
    {
        bgUrl: new URL('@/assets/backgrounds/9.png', import.meta.url).href,
        imgUrl: new URL('@/assets/characters/9.png', import.meta.url).href,
        animation: 'slideScale',
        class: 'character-screen character-screen--left',
        duration: 8000,
    },
];
