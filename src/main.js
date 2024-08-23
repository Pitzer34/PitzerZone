//* import Tailwind CSS
import './style.css';
//* import PrimeVue StyleMode
import { PrimeVue } from '@primevue/core';
import Aura from '@primevue/themes/aura';
//* import Vue Core
import { createApp } from 'vue';
import App from './App.vue';
//* import Vue Router
import router from './router/index';

//* 建立Vue實體
const app = createApp(App);

//* VueRouter設定
app.use(router);
//* PrimeVue設定
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    option: {
      // prefix:
      // 自定義CSS變數前綴, 預設為p, ex: var(-p-primary-color)
      prefix: 'p',
      // darkModeSelector:
      // 深色模式設定, 預設為system, 若要進行深色模式切換, 需定義一個CSS類別選擇器(ex: .my-dark), 在document root上切換樣式, 以達到深色模式的渲染
      darkModeSelector: '.dark',
      // cssLayer:
      // CSS層內定義樣式, 預設為false, 可宣告自定義讀取的順序, 這邊為整合Tailwind CSS與PrimeVue的CSS定義順序
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
});

app.mount('#app');
