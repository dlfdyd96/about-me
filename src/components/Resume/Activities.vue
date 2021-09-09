<template>
  <div>
    <div class="text-2xl sm:text-3xl font-black mb-3 sm:mb-5">{{ title }}</div>

    <ActivityItem :items="trainning" />
    <ActivityItem :items="competitions" />
    <ActivityItem :items="certificates" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ActivityItem from "./ActivityItem.vue";

export interface ActivityI {
  title: string;
  items: ActivityItemI[];
}

export interface ActivityItemI {
  title: string;
  date: string;
  contents: string[];
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: { ActivityItem },
  setup() {
    // const items = ref<ActivityItemI[]>([
    //   {
    //     title: `Programmers Dev Course : 클라우드 기반 백엔드 엔지니어링`,
    //     date: `2015-07-30 ~ 교육 참여 중`,
    //     contents: [
    //       "Java Spring Framework, Cloud (AWS) 교육",
    //       "코드 리뷰, TIL 블로그 포스팅, 기술 세미나 발표 등 참여",
    //     ],
    //   },
    // ]);

    const trainning = ref<ActivityI>({
      title: "Trainning",
      items: [
        {
          title: `Programmers Dev Course : 클라우드 기반 백엔드 엔지니어링`,
          date: `2015-07-30 ~ 교육 참여 중`,
          contents: [
            "Java Spring Framework, Cloud (AWS) 교육",
            "코드 리뷰, TIL 블로그 포스팅, 기술 세미나 발표 등 참여",
          ],
        },
      ],
    });

    const competitions = ref<ActivityI>({
      title: "Competitions",
      items: [
        {
          title: `17회 임베디드 경진대회`,
          date: `2019-05 ~ 2020-12`,
          contents: [
            "주관: 임베디드SWㆍSystem산업협회, 산업통상자원부",
            "자율주행모형자동차 부문 본선 진출 (조장)",
            "OpenCV(C++) 영상처리를 통한 자율주행 모형 자동차 임베디드 소프트웨어 개발",
          ],
        },
      ],
    });

    const certificates = ref<ActivityI>({
      title: "Certificates",
      items: [
        {
          title: `AZ-900: Microsoft Azure Fundamentals`,
          date: `2021-05-26`,
          contents: [
            "Cloud 기본 컨셉과 Mirosoft의 Public Cloud인 Azure 서비스들에 대한 이해도 평가 시험",
            "주관: Microsoft",
          ],
        },
        {
          title: `리눅스 마스터: 2급`,
          date: `2018-12-21`,
          contents: ["주관: 한국정보통신진흥협회"],
        },
        {
          title: `TOEIC Speaking: Level 5`,
          date: `2020-05-16`,
          contents: ["주관: 한국TOEIC위원회"],
        },
      ],
    });

    return { trainning, competitions, certificates };
  },
});
</script>
