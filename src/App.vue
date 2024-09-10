<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Navbar class="mb-4" />
    <main class="flex-1">
      <section id="home" class="mt-8 py-8">
        <Gallery />
      </section>
      <section id="offer" class="py-8 bg-white shadow-sm">
        <Offer />
      </section>
      <section id="about" class="py-8">
        <About />
      </section>
      <section id="partners" class="py-8">
        <Partners />
      </section>
      <section id="contact" class="py-8 bg-white shadow-sm">
        <Contact />
      </section>
      <section id="location" class="py-8">
        <Location />
      </section>
      <section id="opinions" class="py-8">
        <Opinions />
      </section>
    </main>
    <footer class="py-4 bg-gray-800 text-white">
      <Footer />
    </footer>
  </div>
</template>


<script setup>
import Gallery from '@/components/pages/Gallery.vue';
import Navbar from "@/components/pages/Navbar.vue";
import Offer from "@/components/pages/Offer.vue";
import About from './components/pages/About.vue';
import Contact from './components/pages/Contact.vue';
import Location from '@/components/pages/Location.vue';
import Footer from '@/components/pages/Footer.vue';
import Partners from "@/components/pages/Partners.vue";
import Opinions from "@/components/pages/Opinions.vue";
import OpinionForm from "@/components/pages/OpinionForm.vue";
</script>
