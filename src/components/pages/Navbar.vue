<template>
  <div class="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center px-4 py-3 justify-between">
    <div class="flex items-center flex-grow justify-center space-x-3 relative z-10">
      <img src="@/components/images/robaktravelLOGO.jpg" alt="Logo" class="h-16 w-32 object-contain"/>

      <!-- Facebook icon with blue color -->
      <a href="https://www.facebook.com/profile.php?id=61557416097982" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors duration-300">
        <i class="pi pi-facebook text-4xl"></i>
      </a>

      <!-- Instagram icon with purple color -->
      <a href="https://www.instagram.com/beata.robak/" target="_blank" class="text-purple-600 hover:text-purple-800 transition-colors duration-300">
        <i class="pi pi-instagram text-4xl"></i>
      </a>
    </div>

    <div class="flex-grow flex justify-center">
      <Menubar :model="items" class="border-b border-transparent bg-transparent p-menubar">
        <template #item="{ item, props, hasSubmenu, root }">
          <a @click.prevent="scrollToSection(item.href)" v-ripple class="flex items-center text-gray-700 hover:text-gray-900 px-4 py-2 rounded transition duration-200 ease-in-out text-base" :href="item.href">
            <span :class="item.icon" class="mr-2 text-xl"></span>
            <span>{{ item.label }}</span>
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" class="bg-red-500 text-white"/>
            <span v-if="item.shortcut" class="ml-auto border border-gray-300 bg-gray-100 text-gray-600 text-xs p-1 rounded">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" :class="['pi', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
          </a>
        </template>
      </Menubar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    label: 'Robak Travel',
    icon: 'pi pi-home',
    href: '#home'
  },
  {
    label: 'Oferta',
    icon: 'pi pi-star',
    href: '#offer'
  },
  {
    label: 'O nas',
    icon: 'pi pi-id-card',
    href: '#about'
  },
  {
    label: 'Partnerzy',
    icon: 'pi pi-users',
    href: '#partners'
  },
  {
    label: 'Kontakt',
    icon: 'pi pi-envelope',
    href: '#contact',
    badge: 3
  },
  {
    label: 'Lokalizacja',
    icon: 'pi pi-search',
    href: '#location'
  },
  {
    label: 'Opinie',
    icon: 'pi pi-star',
    href: '#opinions'
  }
]);

const scrollToSection = (id) => {
  const element = document.querySelector(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .p-menubar {
    background-color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    z-index: 0;
    margin-bottom: 2rem;
  }
}
</style>
