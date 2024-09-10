<template>
  <div class="flex justify-center pt-8">
    <div class="card text-black max-w-5xl w-full">
      <Carousel :value="reviews" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
        <template #item="slotProps">
          <div class="card-item border border-surface-200 dark:border-surface-700 rounded overflow-hidden">
            <div class="flex justify-center items-center">
              <img :src="slotProps.data.itemImageSrc" :alt="slotProps.data.itemImageSrc" class="w-full h-96 object-cover" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { PhotoService } from "@/service/PhotoService.js";

const reviews = ref([]);

const responsiveOptions = ref([
  {
    breakpoint: '1750px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '1400px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

onMounted(() => {
  PhotoService.getImages().then((data) => {
    reviews.value = data;
  });
});
</script>

<style scoped>
.card {
  max-width: 100%;
  margin: 0 auto;
}

.card-item {
  /* Remove padding if necessary */
  padding: 0;
}
</style>
