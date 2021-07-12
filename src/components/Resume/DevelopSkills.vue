<template>
  <div>
    <div class="text-2xl font-black">{{ title }}</div>
    <div class="pt-4">
      <div v-for="(item, index) in items" :key="index" class="">
        <div class="flex justify-between">
          <div class="font-extrabold text-sm sm:text-base">{{ item.name }}</div>
          <div class="font-bold text-gray-500 text-sm sm:text-base">
            {{ item.percentage }} %
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
          <div
            :style="`width: ${item.percentage}%`"
            class="
              shadow-none
              flex flex-col
              text-center
              whitespace-nowrap
              text-white
              justify-center
              bg-green-400
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface ItemI {
  name: string;
  percentage: number;
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const items = ref<ItemI[]>([
      {
        name: "Back-end",
        percentage: 85,
      },
      {
        name: "Front-end",
        percentage: 75,
      },
      {
        name: "infrastructure",
        percentage: 65,
      },
      {
        name: "Algorithm",
        percentage: 65,
      },
    ]);

    return { items };
  },
});
</script>
