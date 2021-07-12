<template>
  <div>
    <div class="text-2xl font-black">{{ title }}</div>
    <div class="pt-2 flex flex-wrap">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-green-400 p-1 px-2 m-1 text-white rounded-md"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const items = ref<string[]>([
      "Node.js",
      "NestJS",
      "express",
      "MongoDB",
      "MySQL",
      "RESTfulAPI",
      "Vue.js",
    ]);

    return { items };
  },
});
</script>
