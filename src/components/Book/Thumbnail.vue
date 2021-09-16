<template>
  <div class="relative w-full h-full">
    <!-- <a/> -->
    <router-link :to="{ name: 'BookDetail', params: { id } }">
      Thumbnail Item
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
