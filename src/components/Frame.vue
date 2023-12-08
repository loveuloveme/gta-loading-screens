<script setup lang="ts">
import { animations } from '@/constants';
import { Frame, ReturnAnimationType } from '@/types';
import { VariantDefinition } from 'motion';
import { Motion } from 'motion/vue';
import { ref } from 'vue';

interface IFrameProps {
    reverse: boolean;
    frame: Frame;
}

const props = defineProps<IFrameProps>();

const isReverse = ref(props.reverse);

const applyAnimation = (
    animation: ReturnAnimationType,
): ReturnAnimationType => {
    if (!isReverse.value) return animation;

    return {
        ...animation,
        initial: animation.animate,
        animate: animation.initial as VariantDefinition,
    };
};

const totalDuration = (props.frame.duration + 2000) / 1000;

const bgAnim: ReturnAnimationType = {
    initial: { scale: 1.2 },
    animate: { scale: 1 },
};

</script>

<template>
    <Motion
        class="screen"
        :class="props.frame.class"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.5 }"
    >
        <Motion
            class="screen__wrapper"

            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.5, duration: 1 }"
        >
            <div
                class="screen__background"
            >
                <Motion
                    tag="img"
                    :src="props.frame.bgUrl"

                    v-bind="applyAnimation(bgAnim)"
                    :transition="{ duration: totalDuration, easing: 'linear' }"
                />
            </div>
            <div
                class="screen__character"
            >
                <Motion
                    tag="img"
                    :src="props.frame.imgUrl"

                    v-bind="applyAnimation(animations[props.frame.animation ?? 'static'])"
                    :transition="{ duration: totalDuration, easing: 'linear' }"
                />
            </div>
        </Motion>
    </Motion>
</template>

<script lang="ts">
export default {

};
</script>

<style lang="scss">
.screen {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #000000;

    &__wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__wrapper > * {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
    }
}
</style>
