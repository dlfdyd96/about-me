<template>
  <div>
    <div class="fixed bottom-5 right-5">
      <div>
        <button class="m-1 p-4 hover:text-green-500" @click="previousPage">
          <i class="fas fa-less-than"></i>
        </button>
        <button class="m-1 p-4 hover:text-green-500" @click="nextPage">
          <i class="fas fa-greater-than"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const routesInfo = router.getRoutes().filter((item) => item.meta.isPage);
    // const currentPage = ref(0);

    console.log(routesInfo);

    const nextPage = () => {
      const index = routesInfo.findIndex(
        (item) => item.name == router.currentRoute.value.name
      );
      const nextIndex = routesInfo.length > index + 1 ? index + 1 : index;
      router.push({ name: routesInfo[nextIndex].name });
    };

    const previousPage = () => {
      const index = routesInfo.findIndex(
        (item) => item.name == router.currentRoute.value.name
      );
      const nextIndex = 0 < index ? index - 1 : 0;
      router.push({ name: routesInfo[nextIndex].name });
    };
    return { nextPage, previousPage };
  },
});
</script>

<style></style>
