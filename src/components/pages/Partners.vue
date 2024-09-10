<template>
  <div class="flex justify-center">
    <div class="card text-black max-w-5xl w-full">
      <Carousel :value="reviews" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
        <template #item="slotProps">
          <div class="card-item border border-surface-200 dark:border-surface-700 rounded m-2 p-4 flex flex-col items-center">
            <img :src="slotProps.data.itemImageSrc" :alt="slotProps.data.title" class="w-32 h-32 object-cover mb-8" />
            <div class="text-center font-semibold">{{ slotProps.data.title }}</div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { PartnersPhotoService } from "@/service/PartnersPhotoService.js";

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
  PartnersPhotoService.getImages().then((data) => {
    reviews.value = data;
  });
});
</script>

<style scoped>
.card {
  max-width: 80%;
  margin: 0 auto;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.card-item img {
  width: 15rem;
  height: 15rem;
}

.card-item .text-center {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}
</style>
