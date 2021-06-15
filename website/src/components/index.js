import NavItem from './nav-item.vue';

const components = [
  NavItem
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install
};
