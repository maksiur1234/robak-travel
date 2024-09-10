<template>
  <div class="flex justify-center">
    <div class="card text-black max-w-5xl w-full">
      <Carousel :value="reviews" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
        <template #item="slotProps">
          <div class="card-item border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
            <div class="mb-4 flex items-center">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-16 h-16 rounded-full object-cover mr-4" />
              <div>
                <div class="font-medium">{{ slotProps.data.name }}</div>
                <div class="text-sm text-gray-500">{{ slotProps.data.date }}</div>
                <div class="text-sm text-gray-500">Ocena: {{ slotProps.data.rating }}</div>
              </div>
            </div>
            <div class="text-center font-semibold">{{ slotProps.data.title }}</div>
            <p class="mt-2">{{ slotProps.data.content }}</p>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ReviewService } from '@/service/ReviewService.js';

const reviews = ref([]);

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

onMounted(() => {
  ReviewService.getReviewsData().then((data) => {
    reviews.value = data;
  });
});
</script>

<style scoped>
.card {
  max-width: 80%;
  margin: 0 auto;
}
.card-item:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
