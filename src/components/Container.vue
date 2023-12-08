<script lang='ts' setup>
import { Motion } from 'motion/vue';
import { frames as introFrames } from '@/constants';
import { Frame as FrameType } from '@/types';
import Frame from '@/components/Frame.vue';
import Spinner from '@/components/Spinner.vue';
import { preloadImages } from '@/helpers';
</script>

<template>
    <div
        class="container"
    >
        <div
            v-if="isLoading"
            class="container__loader"
        >
            <Spinner />
        </div>
        <Motion
            v-for="(item, index) in frames"
            class="container-item"
            :animate="{ opacity: isEnded ? 0 : 1 }"
            :style="{ zIndex: index }"
            :key="index"
        >
            <Frame
                :frame="item"
                :reverse="reverse"
            />
        </Motion>
    </div>
</template>

<script lang='ts'>
let reverse = false;

export default {
    // eslint-disable-next-line vue/max-len
    data() {
        return {
            current: -1,
            frames: [] as FrameType[],
            audio: null as AudioContext | null,
            source: null as AudioBufferSourceNode | null,
            isLoading: true,
            isEnded: false,
        };
    },
    methods: {
        async loadAudio() {
            const context = new AudioContext();

            const response = await fetch(new URL('@/assets/music.mp3', import.meta.url).href);
            const data = await response.arrayBuffer();
            const decodedData = await context.decodeAudioData(data);
            const buffer = decodedData;

            const source = context.createBufferSource();
            source.buffer = buffer;

            source.connect(context.destination);

            source.onended = () => {
                this.isEnded = true;
            };

            this.source = source;
            this.audio = context;
        },
        setNext() {
            this.current = this.getNext();
            const frame = introFrames[this.current];
            this.frames = [...this.frames, frame];

            setTimeout(() => {
                this.setNext();
            }, frame.duration);
        },
        getNext() {
            const defCurrent = this.current + (reverse ? -1 : 1);

            if (defCurrent > introFrames.length - 1) {
                reverse = true;
                return this.current;
            }

            if (defCurrent < 0 || (reverse && introFrames[defCurrent]?.notRepeatable)) {
                reverse = false;
                return this.current;
            }

            return defCurrent;
        },
    },
    mounted() {
        const images = preloadImages(introFrames
            .flatMap((frame) => [frame.bgUrl, frame.imgUrl])
            .filter(Boolean) as string[]);

        const audio = this.loadAudio();

        Promise.all([images, audio])
            .then(() => {
                this.isLoading = false;
                this.source?.start();
                this.setNext();
            });
    },
    unmounted() {
        if (this.audio) {
            this.audio.close();
        }
    },
};
</script>

<style lang="scss" scoped>
.container{
    position: relative;

    &-item{
        position: absolute;
    }

    &__loader{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
}
</style>
