<template>
  <div>
    <div class="text-2xl font-black">{{ title }}</div>
    <TimeLine :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TimeLine, { TimelineItemI } from "@/components/Resume/TimeLine.vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    TimeLine,
  },
  setup() {
    const items = ref<TimelineItemI[]>([
      {
        title: `금오공과대학교`,
        date: `Mar 2, 2015 ~ Feb 19, 2021`,
        content: ["- 컴퓨터공학과 학사 졸업", "- 3.98 학점 / 4.5 학점"],
      },
    ]);

    return { items };
  },
});
</script>
