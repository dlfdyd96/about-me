<template>
  <div class="my-5 mx-2 sm:m-10">
    <div class="text-4xl font-black px-4 pb-4">
      About <span class="text-green-500">Me</span>
    </div>
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        <Intro />
        <Detail />
        <!-- 자기소개 & 영어로 -->
        <!-- 나이, 지역, 주소, 이메일, 폰, 현재 직업 -->
        <!-- What I Do -->
        <!-- Recent News -->
      </div>
      <div class="grid grid-cols-1 p-4">
        <WhatIDo />
      </div>
      <div class="grid grid-cols-1 p-4">
        <Recent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/components/About/Intro.vue";
import WhatIDo from "@/components/About/WhatIDo.vue";
import Detail from "@/components/About/Detail.vue";
import Recent from "@/components/About/Recent.vue";

export default defineComponent({
  components: {
    Intro,
    WhatIDo,
    Detail,
    Recent,
  },
});
</script>
