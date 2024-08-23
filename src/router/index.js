import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/public/Home.vue'),
  },
  // {
  //   path: '/vitepress',
  //   name: 'VitePress',
  //   component: () => import('../../docs/index.md'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
