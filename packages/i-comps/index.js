import IWaterfall from '@i-comps/waterfall';

const components = [
  IWaterfall
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export {
  IWaterfall
};

export default {
  install
};
