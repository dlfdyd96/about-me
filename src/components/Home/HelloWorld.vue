<template>
  <div class="m-auto pb-12">
    <div class="font-mono text-5xl mb-5">
      I'm <span class="text-7xl sm:text-1xl">{{ myName }}</span>
      .
    </div>
    <div
      class="
        text-3xl
        duration-500
        transition-all
        transform
        translate-y-12
        ease-out
      "
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0":"opacity-100"}'
    >
      <Carousel />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "./Carousel.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    Carousel,
  },
  props: {
    myName: String,
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
