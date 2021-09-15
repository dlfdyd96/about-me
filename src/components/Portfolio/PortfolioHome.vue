<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      <div v-for="(item, index) in items" :key="index">
        <!-- {{ index }} -->
        <Thumbnail
          :image="item.image"
          :title="item.title"
          :thumbnail="item.thumbnail"
          :date="item.date"
          :id="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Thumbnail from "@/components/Portfolio/Thumbnail.vue";
import { useStore } from "vuex";
import { PortfolioI, RootState } from "@/store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PortfolioHome",
  components: {
    Thumbnail,
  },
  setup() {
    const { state } = useStore<RootState>();
    const items = ref(state.portFolioItems);
    console.log(items);

    const router = useRouter();
    console.log(router.getRoutes());

    console.log();

    return { items };
  },
});
</script>

<style></style>
