import IWaterfall from '@i-comps/waterfall';
import IGrid from '@i-comps/grid';
import IGridItem from '@i-comps/grid-item';

const components = [
  IWaterfall,
  IGrid,
  IGridItem
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export {
  IWaterfall,
  IGrid,
  IGridItem
};

export default {
  install
};
