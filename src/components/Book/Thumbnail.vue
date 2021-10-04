<template>
  <div class="w-full h-full">
    <!-- <a/> -->
    <a :href="link" target="_blank">
      <img
        class="
          object-cover object-center
          w-full
          rounded-xl
          bg-center
          b-no-repeat
          bg-auto
        "
        ref="pic"
        :src="require(`@/assets/book/${thumbnail}`)"
        alt="dd"
      />
      <div class="ml-1">
        <div class="font-bold mt-2">[ {{ title }} ]</div>
        <div class="text-sm font-medium text-gray-500">
          읽은 날짜 : {{ date }}
        </div>
      </div>
    </a>
    <!-- <a :href="link" target="_blank"> </a> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    thumbnail: String,
    image: String,
    date: String,
    title: String,
    link: String,
  },
});
</script>

<style></style>
