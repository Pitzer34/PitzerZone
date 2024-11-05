//* Import
import { createApp } from 'vue';
import App from './App.vue';
import './style.css'; // Tailwind CSS
import { PrimeVue } from '@primevue/core'; // PrimeVue
import Aura from '@primevue/themes/aura'; // pluge: PrimeVue-Style
import router from './router/index'; // VueRouter
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './services/firebaseApp';

//* Setting
const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    option: {
      // 自定義CSS變數前綴, 預設為p, ex: var(-p-primary-color)
      prefix: 'p',
      // 深色模式設定, 預設為system, 若要進行深色模式切換, 需定義一個CSS類別選擇器(ex: .my-dark), 在document root上切換樣式, 以達到深色模式的渲染
      darkModeSelector: '.dark',
      // CSS層內定義樣式, 預設為false, 可宣告自定義讀取的順序, 這邊為整合Tailwind CSS與PrimeVue的CSS定義順序
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
});
app.use(VueFire, {
  firebaseApp: firebaseApp,
  modules: [VueFireAuth()],
});

//* Mount
app.mount('#app');
