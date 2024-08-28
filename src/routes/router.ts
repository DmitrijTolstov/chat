import { createMemoryHistory, createRouter } from 'vue-router'

import Authorization from '@/components/Authorization.vue'
import MainPage from '@/components/MainPage.vue'


const routes = [
  // { path: '/', component: Authorization },
  // { path: '/chat', component: MainPage },
  { path: '', component: MainPage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})