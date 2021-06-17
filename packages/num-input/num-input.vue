<template>
  <div class="i-num-input">
    <label class="i-num-input-label" for="i-num-input">{{ label }}</label>
    <input
      id="i-num-input"
      class="i-num-input-inner"
      ref="numInput"
      v-model="curValue"
      type="tel"
      pattern="[0-9]*"
      :maxlength="realMaxlength"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>

<script>
import { formatStr } from '../utils/format/index';
import { isNumeric } from '../utils/validate/number';

export default {
  name: 'i-num-input',
  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
    },
    label: String,
    maxlength: [String, Number],
    placeholder: String,
  },
  data() {
    return {
      curValue: '',
      lastValue: '',
    };
  },
  computed: {
    realMaxlength() {
      const { type, maxlength } = this;
      if (type === 'tel') {
        return 13;
      } else if (type === 'bankcard') {
        return 24;
      }
      const value = String(maxlength);
      return isNumeric(value) ? parseInt(maxlength) : undefined;
    },
  },
  watch: {
    value() {
      this.curValue = this.value;
      this.onInput();
    },
  },
  created() {
    this.curValue = this.value;
    this.onInput();
  },
  methods: {
    onInput() {
      let value = this.curValue;
      if (value === this.lastValue) {
        return;
      }

      let selection;
      if (this.$refs.numInput) {
        selection = this.$refs.numInput.selectionStart;
        if ((value > this.lastValue && /\s/.test(value.charAt(selection))) || selection >= value.length) {
          selection++;
        }
      }

      value = this.parseValue(value);
      value = this.beautify(value);

      this.curValue = value;
      this.lastValue = value;

      if (selection) {
        this.$nextTick(() => {
          this.$refs.numInput.selectionStart = selection;
          this.$refs.numInput.selectionEnd = selection;
        });
      }
      this.$emit('input', value);
    },
    parseValue(value) {
      value = value.replace(/\D/g, '');
      switch (this.type) {
        case 'tel':
          return value.slice(0, 11);
        case 'bankcard':
          return value.slice(0, 20);
        default:
          return value;
      }
    },
    beautify(value) {
      switch (this.type) {
        case 'tel':
          return formatStr(value, [3, 4, 4]);
        case 'bankcard':
          return formatStr(value, [4, 4, 4, 4, 4]);
        default:
          return value;
      }
    },
  },
};
</script>

<style lang="less">
@import './style.less';
</style>
