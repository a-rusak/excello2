import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import { index } from './components/index';

import "./assets/css/lib/bootstrap/bootstrap.min.css";
import "pure-semantic-ui-css/semantic.css";
import "./assets/css/lib/calendar2/pignose.calendar.min.css";
import "owl-carousel-2/assets/owl.carousel.min.css";
import "owl-carousel-2/assets/owl.theme.default.min.css";

import "./assets/icons/font-awesome/css/font-awesome.min.css";
import "./assets/icons/simple-line-icons/css/simple-line-icons.css";
import "./assets/icons/weather-icons/css/weather-icons.min.css";
import "./assets/icons/themify-icons/themify-icons.css";
import "./assets/icons/material-design-iconic-font/css/materialdesignicons.min.css";

import "./assets/css/helper.css";
import "./assets/css/style.css";


// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'hash'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
