<template>
  <div class="i-grid" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { ParentMixin } from '../mixin/relation';
import { addUnit } from '../utils/format/unit';

export default {
  name: 'i-grid',
  mixins: [ ParentMixin('iGrid')],
  props: {
    col: {
      type: [Number, String],
      default: 3
    },
    border: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    gutter: [Number, String],
    direction: String
  },
  data() {
    return {};
  },
  computed: {
    style() {
      const { gutter } = this;
      if (gutter) {
        return {
          paddingLeft: addUnit(gutter)
        };
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less">
@import './style.less';
</style>
