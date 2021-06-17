import IWaterfall from '@i-comps/waterfall';
import IGrid from '@i-comps/grid';
import IGridItem from '@i-comps/grid-item';
import NumInput from '@i-comps/num-input';

const components = [
  IWaterfall,
  IGrid,
  IGridItem,
  NumInput,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export {
  IWaterfall,
  IGrid,
  IGridItem,
  NumInput,
};

export default {
  install,
};
