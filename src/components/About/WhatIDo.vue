<template>
  <div class="text-3xl font-black">
    What <span class="text-green-500">I Do</span>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div v-for="(item, index) in items" :key="index">
      <span
        ><i class="text-5xl text-green-400 p-2" :class="item.icon"></i
      ></span>
      <div class="text-xl font-extrabold text-green-500">{{ item.title }}</div>
      <div class="font-extrabold text-gray-500">{{ item.content }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface ItemI {
  icon: string;
  title: string;
  content: string;
}

export default defineComponent({
  name: "WhatIDo",
  setup() {
    const items = ref<ItemI[]>([
      {
        icon: `fab fa-node`,
        title: `Back-End Development`,
        content: ` 저는 주로 백엔드 개발을 하고 있습니다. NodeJS와 NestJS 프레임워크를 주로 사용하여 API Server를 개발하고 있습니다. 그 밖에도 Database로는 Redis, MongoDB와 MySQL을 사용하며 Docker를 사용하여 애플리케이션들을 관리합니다.`,
      },
      {
        icon: `fas fa-globe-asia`,
        title: `Infrastructure Management`,
        content: `Content`,
      },
      {
        icon: `fas fa-tv`,
        title: `Front-End Development`,
        content: `Content`,
      },
    ]);

    return { items };
  },
});
</script>
