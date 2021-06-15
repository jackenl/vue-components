import Vue from 'vue';
import App from './App.vue';
import router from './router';

import IComps from 'i-comps';
Vue.use(IComps);
import components from './components';
Vue.use(components);

import 'i-comps/index.less';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
