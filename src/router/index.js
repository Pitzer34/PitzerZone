import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('..//pages/Home.vue'),
      Header: () => import('../components/layouts/AppHeader.vue'),
      Footer: () => import('../components/layouts/AppFooter.vue'),
    },
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
