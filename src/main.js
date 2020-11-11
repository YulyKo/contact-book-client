import { createApp } from 'vue';
import axios from 'axios';
import vueAxios from 'vue-axios';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import router from './router';

createApp(App).use(vueAxios, axios).use(store).use(router)
  .mount('#app');
