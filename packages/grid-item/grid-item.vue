<template>
  <div class="i-grid-item" :style="style">
    <div class="i-grid-item-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ChildrenMixin } from '../mixin/relation';
import { addUnit } from '../utils/format/unit';

export default {
  name: 'i-grid-item',
  mixins: [ChildrenMixin('iGrid')],
  data() {
    return {};
  },
  computed: {
    style() {
      const { col, gutter } = this.parent;
      const percent = `${100 / col}%`;
      const style = {
        flexBasis: percent
      };

      if (gutter) {
        const gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= col) {
          style.marginTop = gutterValue;
        }
      }
      return style;
    },
    contentStyle() {
      return {};
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less">
@import './style.less';
</style>
