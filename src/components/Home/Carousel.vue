<template>
  <div class="relative">
    <div
      class="
        absolute
        w-full
        bg-red-300
        flex
        items-center
        justify-center
        text-5xl
        transition-all
        ease-in-out
        duration-1000
        transform
        translate-x-0
        slide
      "
    >
      안녕하세요1
    </div>
    <div
      class="
        absolute
        w-full
        bg-yellow-300
        flex
        items-center
        justify-center
        text-5xl
        transition-all
        ease-in-out
        duration-1000
        transform
        translate-x-full
        slide
      "
    >
      안녕하세요2
    </div>
    <div
      class="
        absolute
        w-full
        bg-blue-300
        flex
        items-center
        justify-center
        text-5xl
        transition-all
        ease-in-out
        duration-1000
        transform
        translate-x-full
        slide
      "
    >
      안녕하세요3
    </div>
  </div>
  <div class="py-10">
    <button @click="nextSlide">gd</button>
    <button @click="previousSlide">gd</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Carousel",
  methods: {
    nextSlide() {
      let activeSlide = document.querySelector(".slide.translate-x-0");
      activeSlide?.classList.remove("translate-x-0");
      activeSlide?.classList.add("-translate-x-full");

      let nextSlide = activeSlide?.nextElementSibling;
      nextSlide?.classList.remove("translate-x-full");
      nextSlide?.classList.add("translate-x-0");
    },
    previousSlide() {
      let activeSlide = document.querySelector(".slide.translate-x-0");
      activeSlide?.classList.remove("translate-x-0");
      activeSlide?.classList.add("translate-x-full");

      let previousSlide = activeSlide?.previousElementSibling;
      previousSlide?.classList.remove("-translate-x-full");
      previousSlide?.classList.add("translate-x-0");
    },
  },
});
</script>

<style></style>
