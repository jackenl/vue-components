import Vue from 'vue';
import App from './App.vue';
import router from './router';

import HComps from 'h-comps';
Vue.use(HComps);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
