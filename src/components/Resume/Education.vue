<template>
  <div>
    <div class="text-2xl sm:text-3xl font-black mb-3 sm:mb-5">{{ title }}</div>

    <div>
      <div class="mb-7" v-for="(item, itemIndex) in items" :key="itemIndex">
        <div class="text-lg sm:text-xl font-black mb-1 sm:mb-2 mt-4 sm:mt-6">
          {{ itemIndex + 1 }}. {{ item.title }}
          <!-- </div>
        <div class="text-lg sm:text-xl font-bold mb-2">
          {{ item.office }} -->
          <span class="ml-2 text-base sm:text-lg font-medium text-gray-500"
            >({{ item.date }})</span
          >
        </div>

        <div
          class="mb-1 sm:mb-2"
          v-for="(content, contentsIndex) in item.contents"
          :key="contentsIndex"
        >
          <div class="ml-4 text-base sm:text-lg font-medium">
            - {{ content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export interface EducationItemI {
  date: string;
  title: string;
  contents: string[];
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup() {
    const items = ref<EducationItemI[]>([
      {
        title: `Programmers Dev Course : 클라우드 기반 백엔드 엔지니어링`,
        date: `2015-07-30 ~ 교육 참여 중`,
        contents: [
          "Java Spring Framework, Cloud (AWS) 교육",
          "코드 리뷰, TIL 블로그 포스팅, 기술 세미나 발표 등 참여",
        ],
      },
      {
        title: `금오공과대학교`,
        date: `2015-03-02 ~ 2021-02-19`,
        contents: [
          "컴퓨터공학과 학사 졸업",
          "3.98 학점 / 4.5 학점",
          "시스템 소프트웨어 연구실 학부 연구생 (2018-09 ~ 2021-02)",
          "축구 동아리 Cost 부원 (2018-03 ~ 2021-02)",
        ],
      },
      {
        title: `영남고등학교`,
        date: `2012-03 ~ 2015-02`,
        contents: [],
      },
    ]);

    return { items };
  },
});
</script>
