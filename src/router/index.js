import Vue from 'vue';
import VueRouter from 'vue-router';
import Tours from '../views/Tours.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/tours',
  },
  {
    path: '/tours',
    name: 'Tours',
    component: Tours,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
