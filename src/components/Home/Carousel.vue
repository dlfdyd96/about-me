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
        scale-100
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
        scale-0
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
        scale-0
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
      let activeSlide = document.querySelector(".slide.scale-100");
      activeSlide?.classList.remove("scale-100");
      activeSlide?.classList.add("scale-0");

      let nextSlide = activeSlide?.nextElementSibling;
      nextSlide?.classList.remove("scale-0");
      nextSlide?.classList.add("scale-100");
    },
    previousSlide() {
      let activeSlide = document.querySelector(".slide.scale-100");
      activeSlide?.classList.remove("scale-100");
      activeSlide?.classList.add("scale-0");

      let previousSlide = activeSlide?.previousElementSibling;
      previousSlide?.classList.remove("scale-0");
      previousSlide?.classList.add("scale-100");
    },
  },
});
</script>

<style></style>
