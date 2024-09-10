<template>
  <div class="flex items-center justify-center text-black">
    <div class="w-full max-w-screen-lg p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-bold text-center mb-6 text-black">Dowiedz się o nas więcej!</h1>
      <Accordion v-model:activeIndex="active">
        <AccordionTab header="O nas" class="border-b border-gray-200 text-black">
          <p class="m-0 p-4">
            Jesteśmy rodzinnym biurem podróży, które działa na rynku od ponad 20 lat.
            Naszą misją jest tworzenie niezapomnianych doświadczeń podróżniczych, które spełniają marzenia klientów o dalekich podróżach.
            Specjalizujemy się w organizowaniu wyjazdów dopasowanych do indywidualnych potrzeb, zarówno w kraju, jak i za granicą.
          </p>
        </AccordionTab>
        <AccordionTab header="Nasz zespół" class="border-b border-gray-200">
          <p class="m-0 p-4">
            W skład naszego zespołu wchodzi Pani Beata, założycielka i właścicielka biura podróży, która od ponad 20 lat zajmuje się organizacją
            wyjazdów turystycznych. Dzięki swojej pasji i doświadczeniu, Pani Beata pomaga naszym klientom w odkrywaniu najpiękniejszych zakątków świata,
            dbając o każdy szczegół podróży.
          </p>
        </AccordionTab>
        <AccordionTab header="Dlaczego my?" class="border-b border-gray-200">
          <p class="m-0 p-4">
            Mamy ponad 20 lat doświadczenia w branży turystycznej, co pozwala nam na profesjonalną obsługę i dostosowanie ofert do oczekiwań nawet najbardziej wymagających klientów.
            Współpracujemy z renomowanymi partnerami na całym świecie, co gwarantuje wysoką jakość naszych usług. Dodatkowo zapewniamy pełne wsparcie w trakcie wyjazdu, aby każda podróż była bezproblemowa i pełna wrażeń.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
</script>

<style scoped>
</style>
