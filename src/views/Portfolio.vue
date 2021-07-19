<template>
  <div>
    <div class="my-5 mx-2 sm:m-10">
      <div class="text-4xl font-black px-4 pb-4">Portfolio</div>
      <router-view class="px-4"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Portfolio",
  components: {},
});
</script>

<style></style>
