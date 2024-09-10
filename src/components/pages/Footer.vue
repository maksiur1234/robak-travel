<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2">Robak Travel</h3>
            <p class="text-gray-400">
              Jesteśmy firmą z wieloletnim doświadczeniem w branży turystycznej. Naszym celem jest dostarczanie najwyższej jakości usług dla naszych klientów.
            </p>
          </div>
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2">Nawigacja</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Strona główna</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">O nas</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Usługi</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">Kontakt</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/3">
            <h3 class="text-xl font-bold mb-2">Kontakt</h3>
            <p class="text-gray-400">
              Adres: Murowana Goślina ul. Rogozińska 31, 62-095
            </p>
            <p class="text-gray-400">
              Telefon: +48 123 456 789
            </p>
            <p class="text-gray-400">
              Email: biuro@robak-travel.pl
            </p>
          </div>
        </div>
        <div class="mt-8 text-center text-gray-400">
          &copy; {{currentYear}} Robak Travel. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import {ref} from 'vue';

  const currentYear = ref(new Date().getFullYear());
  </script>
  
  <style scoped>

  </style>
  