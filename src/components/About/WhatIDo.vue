<template>
  <div class="text-2xl sm:text-3xl font-black pb-4">
    What <span class="text-green-500">I Do</span>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div v-for="(item, index) in items" :key="index">
      <span
        ><i
          class="text-4xl sm:text-5xl text-green-400 p-2"
          :class="item.icon"
        ></i
      ></span>
      <div class="text-lg sm:text-xl font-black text-green-500">
        {{ item.title }}
      </div>
      <div class="text-sm sm:text-base font-extrabold text-gray-500">
        {{ item.content }}
      </div>
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
        icon: `fas fa-server`,
        title: `Back-End Development`,
        content: `저는 주로 NodeJS와 NestJS 프레임워크를 사용하여 API Server를 개발하고 있습니다. 그 밖에도 Database로는 Redis, MongoDB와 MySQL을 사용하며 Docker를 사용하여 애플리케이션들을 관리합니다.`,
      },
      {
        icon: `fas fa-globe-asia`,
        title: `Infrastructure Management`,
        content: `Microsoft Azure 클라우드 컴퓨팅 서비스를 사용하여 리소스들을 관리하고 있습니다. 또한 Docker, Jenkins 그리고 Github를 사용하여 CI/CD 파이프라인을 구축합니다. Azure를 사용하다보니 관심이 생겨 AZ-900: Azure Fundamentals certification을 가지고 있습니다.`,
      },
      {
        icon: `fas fa-tv`,
        title: `Front-End Development`,
        content: `Vue.js 프레임워크를 주로 사용하여 Vue 3, TypeScript 그리고 tailwindcss 등을 사용하여 개발하고 있습니다.`,
      },
      {
        icon: `far fa-lightbulb`,
        title: `Thinking Practical Idea`,
        content: `저의 이름 '일용(日用)'처럼 날마다 일상에 도움이 되는 모든 것을 만들고자 노력합니다. 그러기 위해 항상 새롭고 다양한 것들을 접하여 개발하며 이 과정에서 저의 개발 역량을 키우고 있다고 생각합니다.`,
      },
    ]);

    return { items };
  },
});
</script>
