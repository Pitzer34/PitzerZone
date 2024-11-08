import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    // children: [
    //   {
    //     path: 'home',
    //     name: 'Home',
    //     component: () => import('../pages/Home.vue'),
    //   },
    // ],
  },
  // {
  //   path: '/',
  //   name: 'Index',
  //   components: {
  //     default: () => import('../pages/index.vue'),
  //     Header: () => import('../components/layouts/AppHeader.vue'),
  //     Footer: () => import('../components/layouts/AppFooter.vue'),
  //   },
  //   children: [],
  // },
  // {
  //   path: '/vitepress',
  //   name: 'VitePress',
  //   component: () => import('../../docs/index.md'),
  // },
];

const router = createRouter({
  //history: createWebHistory('/PitzerZone'),
  history: createWebHistory(),
  routes: routes,
});

export default router;
