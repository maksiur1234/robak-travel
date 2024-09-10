import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '@/components/pages/Gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Gallery
    }
  ]
})

export default router
