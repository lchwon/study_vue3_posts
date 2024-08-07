//bootstrap 설치 후 import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';

//router/index.js에서 설정한 router 객체를 가져옴
import router from '@/router';

//use 메서드를 통해서 설정한다.
createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
