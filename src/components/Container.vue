<script lang='ts' setup>
import { Motion } from 'motion/vue';
import { frames as introFrames } from '@/constants';
import { Frame as FrameType } from '@/types';
import Frame from '@/components/Frame.vue';
</script>

<template>
    <div
        class="container"
    >
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
    data(): { frames: FrameType[], current: number, audio: AudioContext | null, isEnded: boolean } {
        return {
            current: -1,
            frames: [],
            audio: null,
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
            source.start(0);

            this.audio = context;

            source.onended = () => {
                this.isEnded = true;
            };
        },
        setNext() {
            this.current = this.getNext();
            const frame = introFrames[this.current];
            this.frames = [...this.frames, frame];

            // const nextImgs = characters[this.getNext()];
            // preloadImages(nextImgs);

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
        this.loadAudio()
            .then(() => this.setNext());
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
}
</style>
