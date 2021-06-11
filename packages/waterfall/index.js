import Waterfall from './src/waterfall.vue';

Waterfall.install = function (Vue) {
  Vue.component(Waterfall.name, Waterfall);
};

export default Waterfall;
