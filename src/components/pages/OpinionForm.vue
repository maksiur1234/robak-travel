<template>
  <div class="flex justify-center items-center bg-gray-100">
    <div class="max-w-lg w-full bg-white rounded-xl shadow-md overflow-hidden p-6 mb-12">
      <h2 class="text-2xl font-bold mb-6 text-black">Wystaw opinię</h2>
      <form @submit.prevent="submitReview">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Imię i nazwisko</label>
          <input type="text" id="name" v-model="newReview.name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Tytuł</label>
          <input type="text" id="title" v-model="newReview.title" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div class="mb-4">
          <label for="content" class="block text-sm font-medium text-gray-700">Treść opinii</label>
          <textarea id="content" v-model="newReview.content" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Ocena</label>
          <div class="flex items-center">
            <template v-for="star in 5" :key="star">
              <svg @click="setRating(star)" :class="{'text-yellow-500': star <= newReview.rating, 'text-gray-300': star > newReview.rating}" class="h-5 w-5 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </template>
          </div>
        </div>
        <div class="mt-6">
          <button type="submit" class="w-full px-4 py-2 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Wyślij opinię</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newReview = ref({
  name: '',
  title: '',
  content: '',
  rating: 0
});

const setRating = (star) => {
  newReview.value.rating = star;
};

const submitReview = () => {
  console.log(newReview.value);
  newReview.value = {
    name: '',
    title: '',
    content: '',
    rating: 0
  };
  alert('Dziękujemy za wystawienie opinii!');
};
</script>

<style scoped>
</style>
