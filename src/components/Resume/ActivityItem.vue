<template>
  <div>
    <div class="text-xl sm:text-2xl font-black mb-1 sm:mb-2 mt-4 sm:mt-6">
      {{ items.title }}
    </div>
    <div class="mb-7" v-for="(item, itemIndex) in items.items" :key="itemIndex">
      <div class="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
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
        <div class="ml-4 text-base">- {{ content }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ActivityItemI } from "./Activities.vue";

export default defineComponent({
  props: {
    items: {
      type: Object as PropType<ActivityItemI>,
      required: true,
    },
  },
  components: {},
});
</script>
