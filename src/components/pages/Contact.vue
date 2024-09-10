<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-r from-gray-700 to-gray-900" style="background-image: url('https://pixels.com.pl/wp-content/uploads/2023/02/petrokan_wnetrze_01.jpg');">
    <form @submit.prevent="submitForm" class="w-full max-w-lg p-8 bg-white bg-opacity-90 shadow-lg rounded-lg border border-gray-300">
      <h1 class="text-3xl font-bold text-black mb-6 text-center">Skontaktuj się z nami wypełniając formularz!</h1>
      <div class="space-y-4">
        <div class="relative">
          <i class="pi pi-inbox absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div class="relative">
          <i class="pi pi-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
              v-model="form.name"
              type="text"
              placeholder="Imię i nazwisko"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 text-black focus:ring-orange-400"
          />
        </div>
        <div class="relative">
          <i class="pi pi-list-check absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
              v-model="form.subject"
              type="text"
              placeholder="Temat"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          />
        </div>
        <div class="relative">
          <i class="pi pi-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <textarea
              v-model="form.content"
              placeholder="Dzień dobry, Chciałabym wylecieć na wakacje do Włoch..."
              class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          />
        </div>
        <div class="flex items-center space-x-2 mt-4">
          <input
              type="checkbox"
              id="accept"
              v-model="form.accept"
              class="h-5 w-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
          />
          <label for="accept" class="text-gray-700 text-sm">Zgadzam się z polityką prywatności.</label>
        </div>
        <Toast />
        <button
            type="submit"
            class="w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-300"
        >
          Wyślij
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const form = ref({
  name: '',
  email: '',
  subject: '',
  content: '',
  accept: false
});

const fetchCsrfToken = async () => {
  try {
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true });
  } catch (error) {
    console.error('Błąd przy pobieraniu tokenu CSRF:', error);
  }
};


const submitForm = async () => {
  try {
    await fetchCsrfToken();

    if (!form.value.accept) {
      toast.add({ severity: 'error', summary: 'Błąd', detail: 'Proszę zaakceptować polityke prywatności.', life: 3000 });
      return;
    }

    const response = await axios.post('http://127.0.0.1:8000/send-email', form.value, {
      withCredentials: true
    });

    toast.add({ severity: 'success', summary: 'Poprawnie wysłano maila!', detail: response.data.message, life: 3000 });
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Błąd', detail: 'Wystąpił błąd przy wysyłaniu formularza.', life: 3000 });
  }
};
</script>

<style scoped>
</style>
