import VueAxios from 'vue-axios';
import axios from 'axios';

import 'bootstrap';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(VueAxios, axios);

Vue.component('Loading', Loading);

Vue.component('VueSlickCarousel', VueSlickCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
