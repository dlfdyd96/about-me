<template>
  <div class="my-5 mx-2 sm:m-10">
    <div class="text-4xl font-black px-4 pb-4">황일용</div>
    <div class="grid gap-6 p-4">
      <!-- 간단한 자기소개 (문단으로) -->
      <Intro class="col-span-1" />
      <!-- 내 정보 (연락처, 개발 블로그, 사는곳, 전화번호, 현 직장) -->
      <Detail class="col-span-1" />
      <!-- Work Experience -->
      <Experience :title="'Experience'" class="col-span-1" />

      <!-- Education -->
      <Education :title="'Education'" class="col-span-1" />

      <!-- <DevelopSkills
        :title="'DevelopSkills'"
        class="col-span-2 sm:col-span-1"
      />
      <Knowledges :title="'Knowledges'" />
      <Education :title="'Education'" class="col-span-2" />
      <Experience :title="'Experience'" class="col-span-2" />

      <Awards :title="'Awards / Certificate'" class="col-span-2" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/components/Resume/Intro.vue";
import Detail from "@/components/Resume/Detail.vue";
// import Awards from "@/components/Resume/Awards.vue";
// import DevelopSkills from "@/components/Resume/DevelopSkills.vue";
import Education from "@/components/Resume/Education.vue";
import Experience from "@/components/Resume/Experience.vue";
// import Knowledges from "@/components/Resume/Knowledges.vue";

export default defineComponent({
  name: "Resume",
  components: { Intro, Detail, Experience, Education },
  // components: { Awards, DevelopSkills, Education, Experience, Knowledges },
});
</script>

<style></style>
