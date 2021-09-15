<template>
  <div class="relative w-full h-full">
    <!-- <a/> -->
    <router-link :to="{ name: 'PortFolioDetail', params: { id } }">
      <img
        class="
          object-cover object-center
          w-full
          h-full
          rounded-xl
          bg-center
          b-no-repeat
          bg-auto
        "
        ref="pic"
        :src="require(`@/assets/portfolio/${thumbnail}`)"
        :style="{ filter: `brightness(40%)` }"
        alt="dd"
      />
      <div
        class="
          mx-4
          absolute
          inset-0
          text-white
          flex flex-col
          items-center
          justify-center
        "
      >
        <div class="text-5xl sm:text-2xl mb-7 text-center">{{ title }}</div>
        <div class="text-xl sm:text-sm">{{ date }}</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: Number,
    thumbnail: String,
    image: String,
    date: String,
    title: String,
  },
});
</script>

<style></style>
