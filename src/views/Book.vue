<template>
  <div>
    <div class="my-5 sm:mx-2 sm:m-10">
      <div class="text-4xl font-black px-4 pb-4">Book</div>
      <router-view class="px-4"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Book",
  components: {},
});
</script>

<style></style>
