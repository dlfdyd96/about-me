<template>
  <div class="relative">
    <!-- <a/> -->
    <router-link :to="{ name: 'PortFolioDetail', params: { id } }">
      <img
        class="rounded-xl bg-center b-no-repeat bg-auto"
        ref="pic"
        :src="require(`@/assets/portfolio/${image}`)"
        :style="{ filter: `brightness(40%)` }"
        alt="dd"
      />
      <div
        class="
          absolute
          inset-0
          text-white
          flex
          items-center
          justify-center
          text-2xl
        "
      >
        {{ title }}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: Number,
    image: String,
    title: String,
  },
});
</script>

<style></style>
