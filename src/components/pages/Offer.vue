<template>
  <div class="py-12 flex flex-col items-center space-y-8 bg-gray-100">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Zobacz naszą oferte</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="user header" src="https://www.holidayhypermarket.co.uk/wp-content/uploads/2021/05/FamilyHolidays_shutterstock_1571106469.png" class="card-image" />
        </template>
        <template #title>Wyjazdy indywidualne</template>
        <template #subtitle>Przeżyj niezapomniane wakacje</template>
        <template #content>
          <p class="m-0">
            Urlop na plaży w gorącej Hiszpani, a może szlaki górskie w Szwajcarii?
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Zobacz ofertę" class="w-full" />
          </div>
        </template>
      </Card>
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="user header" src="https://www.projektefektywny.pl/wp-content/uploads/2023/08/Wyjazdy-szkoleniowe-dla-firm.jpg" class="card-image" />
        </template>
        <template #title>Wyjazdy dla firm</template>
        <template #subtitle>Zaplanuj delegacje dla swoich pracowników</template>
        <template #content>
          <p class="m-0">
            Szukasz miejsca w którym Twoi pracownicy będą czuć sie komfortowo w delegacji?
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Zobacz ofertę" class="w-full" />
          </div>
        </template>
      </Card>
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="user header" src="https://grupymatimpex.pl/wp-content/uploads/2020/08/main-wyjazdy-grupowe-matimpex-travel-incentive.jpg" class="card-image" />
        </template>
        <template #title>Wyjazdy grupowe</template>
        <template #subtitle>Najlepsze chwile razem z bliskimi</template>
        <template #content>
          <p class="m-0">
            Razem ze swoimi przyjaciółmi zwiedzicie wspaniałe miejsca
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Zobacz ofertę" class="w-full" />
          </div>
        </template>
      </Card>
      <Card class="shadow-lg animated-card">
        <template #header>
          <img alt="user header" src="https://horyzont.net.pl/wp-content/uploads/2019/12/wyjazd-integracyjny-1600x800.jpg" class="card-image" />
        </template>
        <template #title>Wyjazdy integracyjne</template>
        <template #subtitle>Zapoznaj się z ludźmi w zespole</template>
        <template #content>
          <p class="m-0">
            Umów wyjazd wraz ze swoim zespołem
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Zobacz ofertę" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-card {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

.animated-card:nth-child(1) {
  animation-delay: 0.2s;
}

.animated-card:nth-child(2) {
  animation-delay: 0.4s;
}

.animated-card:nth-child(3) {
  animation-delay: 0.6s;
}

.animated-card:nth-child(4) {
  animation-delay: 0.8s;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>
