/**
 * @name: index.js
 * @author: win10
 * @date: 2023/11/14 15:45
 * @description：index.js
 * @update: 2023/11/14 15:45
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: `/login`,
    name: `Login`,
    component: () => import(`views/login/LoginIndex.vue`),
  },
  {
    path: `/`,
    name: `Home`,
    component: () => import(`views/home/HomeIndex.vue`),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
