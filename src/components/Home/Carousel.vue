<template>
  <div class="relative">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="
        absolute
        w-full
        flex
        items-center
        justify-center
        text-3xl
        transition-all
        ease-in-out
        duration-1000
        transform
        slide
      "
      :class="slide.animationProps"
    >
      {{ slide.text }}
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 1. setup() composition api로 수정
 * 2. const slides = [ { animationProps: String, text: String } ]
 * 3. div v-for="(slide, index) in slides" v-bind:key="index"
 * 4. nextSlide(), previousSlide() 수정
 *  4-1. const currentSlideIdx = ref(0);
 *  4-2-1. nextSlide() { if (currentSlideIdx == slides.length) currentSlideIdx = 0; }
 *  4-2-2. previousSlide() { if (currentSlideIdx == 0) currentSlideIdx = slides.length; }
 */
import { defineComponent, ref } from "vue";

interface SlideI {
  text: string;
  animationProps: string;
}

export default defineComponent({
  name: "Carousel",
  setup() {
    const currentSlideIdx = ref(0);
    const slides = ref<SlideI[]>([
      {
        text: "헬로 월드! 제 포트폴리오 사이트에 오신 것을 환영합니다.",
        animationProps: "scale-100 opacity-100",
      },
      {
        text: "Hello World! Welcome to my Portfolio site.",
        animationProps: "scale-0 opacity-0",
      },
      {
        text: "ハローワールド！ 私のポートフォリオサイトへようこそ。",
        animationProps: "scale-0 opacity-0",
      },
    ]);

    const nextSlide = () => {
      const length = slides.value.length;
      const curIdx = currentSlideIdx.value;
      const nextIdx = (curIdx + 1) % length;

      slides.value[curIdx].animationProps = "scale-0 opacity-0";
      slides.value[nextIdx].animationProps = "scale-100 opacity-100";

      currentSlideIdx.value = nextIdx;
    };

    const previousSlide = () => {
      const length = slides.value.length;
      const curIdx = currentSlideIdx.value;
      const prevIdx = (length + curIdx - 1) % length;

      slides.value[curIdx].animationProps = "scale-0 opacity-0";
      slides.value[prevIdx].animationProps = "scale-100 opacity-100";

      currentSlideIdx.value = prevIdx;
    };

    setInterval(() => {
      nextSlide();
    }, 3000);

    return { currentSlideIdx, slides, nextSlide, previousSlide };
  },
});
</script>

<style></style>
