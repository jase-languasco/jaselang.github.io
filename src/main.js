import Vue from 'vue';
import VueRouter from 'vue-router';
// import axios from 'axios';

window.Vue = Vue;
// window.axios = axios;

// window.axios.defaults.headers.common = {
//   'X-Requested-With': 'XMLHttpRequest'
// }

Vue.use(VueRouter);

Vue.config.productionTip = false;

import App from './App.vue';
import router from './routes';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')