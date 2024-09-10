<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8 bg-gray-100">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Zobacz naszą ofertę</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="Wyjazdy indywidualne" src="https://www.holidayhypermarket.co.uk/wp-content/uploads/2021/05/FamilyHolidays_shutterstock_1571106469.png" class="card-image" />
        </template>
        <template #title>Wyjazdy indywidualne</template>
        <template #subtitle>Przeżyj niezapomniane wakacje</template>
        <template #content>
          <p class="m-0">
            Ciesz się osobistą przygodą w wyjątkowych miejscach na całym świecie. Nasze oferty są dostosowane do Twoich potrzeb i zapewniają elastyczność oraz komfort. Idealne dla osób szukających indywidualnych przygód.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
              <Button label="Zobacz Więcej" class="w-full" @click="visibleIndividual = true"/>
              <Dialog v-model:visible="visibleIndividual" modal header="Wyjazdy indywidualne" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                <p class="m-0">
                  <strong>Oferujemy:</strong>
                  <ul class="list-disc list-inside mt-4 space-y-2">
                    <li>Spersonalizowane plany podróży dopasowane do Twoich indywidualnych potrzeb</li>
                    <li>Różnorodne kierunki: plaże, góry, miasta i egzotyczne miejsca na całym świecie</li>
                    <li>Elastyczne daty wyjazdów i powrotów dostosowane do Twojego kalendarza</li>
                    <li>Opcje zakwaterowania: od luksusowych hoteli po urokliwe pensjonaty</li>
                    <li>Prywatny transport oraz możliwość wynajmu samochodów</li>
                    <li>Możliwość dodania wycieczek fakultatywnych oraz przewodników</li>
                  </ul>
                  <br>
                  <p>
                    Nasze indywidualne wyjazdy są zaprojektowane z myślą o klientach, którzy pragną niezależności i unikalnych doświadczeń. Niezależnie czy planujesz romantyczny wypad, relaksujący urlop, czy przygodę życia, my zajmiemy się resztą, aby Twoja podróż była idealna.
                  </p>
                  <p>
                    Skontaktuj się z nami, aby dopasować szczegóły wyjazdu do Twoich oczekiwań.
                  </p>
                </p>
              </Dialog>
          </div>
        </template>
      </Card>
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="Wyjazdy dla firm" src="https://www.projektefektywny.pl/wp-content/uploads/2023/08/Wyjazdy-szkoleniowe-dla-firm.jpg" class="card-image" />
        </template>
        <template #title>Wyjazdy dla firm</template>
        <template #subtitle>Zaplanuj delegacje dla swoich pracowników</template>
        <template #content>
          <p class="m-0">
            Doskonałe rozwiązania dla delegacji i spotkań biznesowych. Oferujemy komfortowe zakwaterowanie i przestrzeń do spotkań, co zwiększa efektywność zespołu i integrację pracowników. Idealne dla firm planujących wyjazdy służbowe.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Zobacz Więcej" class="w-full" @click="visibleCompany = true"/>
            <Dialog v-model:visible="visibleCompany" modal header="Wyjazdy dla firm" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
              <p class="m-0">
                <strong>Oferujemy dla firm:</strong>
                <ul class="list-disc list-inside mt-4 space-y-2">
                  <li>Kompleksową organizację wyjazdów służbowych i szkoleń</li>
                  <li>Profesjonalne zaplecze konferencyjne i sale spotkań</li>
                  <li>Organizację aktywności integracyjnych i wycieczek po godzinach</li>
                  <li>Opcje zakwaterowania i transportu dostosowane do budżetu firmy</li>
                  <li>Dedykowane programy rozwoju dla pracowników</li>
                  <li>Pomoc w organizacji wiz oraz formalności międzynarodowych</li>
                </ul>
                <br>
                <p>Wyjazdy firmowe z nami to gwarancja efektywności i komfortu Twojego zespołu.</p>
              </p>
            </Dialog>
          </div>
        </template>
      </Card>
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="Wyjazdy grupowe" src="https://grupymatimpex.pl/wp-content/uploads/2020/08/main-wyjazdy-grupowe-matimpex-travel-incentive.jpg" class="card-image" />
        </template>
        <template #title>Wyjazdy grupowe</template>
        <template #subtitle>Najlepsze chwile razem z bliskimi</template>
        <template #content>
          <p class="m-0">
            Niezapomniane chwile z bliskimi w interesujących miejscach. Nasze pakiety dla grup zapewniają więcej zabawy i wyjątkowych wspomnień. Idealne dla przyjaciół, rodziny czy grup szkolnych.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Zobacz Więcej" class="w-full" @click="visibleGroup = true"/>
            <Dialog v-model:visible="visibleGroup" modal header="Wyjazdy grupowe" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
              <p class="m-0">
                <strong>Oferujemy dla grup:</strong>
                <ul class="list-disc list-inside mt-4 space-y-2">
                  <li>Zwiedzanie zorganizowane dla grup przyjaciół, rodzin i stowarzyszeń</li>
                  <li>Wieloosobowe rezerwacje hoteli i apartamentów z rabatami grupowymi</li>
                  <li>Opcje transportu dla grup, w tym autokary, busy i prywatne transfery</li>
                  <li>Zorganizowane wycieczki z przewodnikiem</li>
                  <li>Specjalne programy aktywności grupowych, jak warsztaty, wycieczki fakultatywne</li>
                </ul>
                <br>
                <p>Wyjazdy grupowe to doskonała okazja, by spędzić czas z bliskimi i cieszyć się wspólnymi chwilami w pięknych miejscach.</p>
              </p>
            </Dialog>
          </div>
        </template>
      </Card>
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="Wyjazdy integracyjne" src="https://horyzont.net.pl/wp-content/uploads/2019/12/wyjazd-integracyjny-1600x800.jpg" class="card-image" />
        </template>
        <template #title>Wyjazdy integracyjne</template>
        <template #subtitle>Zapoznaj się z ludźmi w zespole</template>
        <template #content>
          <p class="m-0">
            Wspólne działania, które zbliżą Twój zespół. Nasze programy budujące zespół i rozwijające umiejętności są idealne dla firm i zespołów szukających sposobów na integrację i motywację.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Zobacz Więcej" class="w-full" @click="visibleIntegration = true"/>
            <Dialog v-model:visible="visibleIntegration" modal header="Wyjazdy integracyjne" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
              <p class="m-0">
                <strong>Oferujemy wyjazdy integracyjne:</strong>
                <ul class="list-disc list-inside mt-4 space-y-2">
                  <li>Programy integracyjne, które budują relacje między pracownikami</li>
                  <li>Aktywności zespołowe, jak warsztaty kreatywne, gry terenowe i zawody sportowe</li>
                  <li>Organizacja atrakcji na świeżym powietrzu: ogniska, pikniki, gry zespołowe</li>
                  <li>Wyprawy outdoorowe: wspinaczka, trekking, rafting</li>
                  <li>Zakwaterowanie w hotelach z salami konferencyjnymi i zapleczem rekreacyjnym</li>
                  <li>Opcje relaksu i wellness, jak spa, baseny, jacuzzi dla zespołów</li>
                </ul>
                <br>
                <p>Wyjazdy integracyjne to doskonały sposób na budowanie silniejszych więzi w Twoim zespole w przyjemnej i aktywnej atmosferze.</p>
              </p>
            </Dialog>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const visibleIndividual = ref(false);
const visibleIntegration = ref(false);
const visibleCompany = ref(false);
const visibleGroup = ref(false);
</script>

<style scoped>
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.animated-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.animated-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
