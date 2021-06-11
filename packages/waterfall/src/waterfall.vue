<template>
  <div class="i-waterfall">
    <div ref="left" class="i-waterfall-column"><slot name="left" :leftList="leftList"></slot></div>
    <div ref="right" class="i-waterfall-column"><slot name="right" :rightList="rightList"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'i-waterfall',
  model: {
    prop: 'list',
    event: 'change'
  },
  props: {
    list: {
      type: Array,
      require: true,
      default: () => []
    },
    addTime: {
      type: [Number, String],
      default: 100
    },
    idKey: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      leftList: [],
      rightList: [],
      tempList: [],
      children: []
    };
  },
  computed: {
    copyList() {
      // 监听 copyList，能监听到不同新旧值
      return this.cloneData(this.list);
    }
  },
  watch: {
    copyList(nVal, oVal) {
      let startIndex = Array.isArray(oVal) && oVal.length > 0 ? oVal.length : 0;
      this.tempList = this.tempList.concat(nVal.slice(startIndex));
      this.splitData();
    }
  },
  mounted() {
    this.tempList = this.cloneData(this.copyList);
    this.splitData();
  },
  methods: {
    splitData() {
      if (!this.tempList.length) return;
      const leftRect = this.$refs.left.getBoundingClientRect();
      const rightRect = this.$refs.right.getBoundingClientRect();
      const item = this.tempList.splice(0, 1)[0];
      if (item) {
        if (leftRect.height < rightRect.height) {
          this.leftList.push(item);
        } else if (leftRect.height > rightRect.height) {
          this.rightList.push(item);
        } else {
          if (this.leftList.length <= this.rightList.length) {
            this.leftList.push(item);
          } else {
            this.rightList.push(item);
          }
        }
      }
      if (this.tempList.length > 0) {
        setTimeout(() => {
          this.splitData();
        }, this.addTime);
      }
    },
    cloneData(data) {
      return JSON.parse(JSON.stringify(data));
    },
    clear() {
      this.leftList = [];
      this.rightList = [];
      this.$emit('change', []);
      this.tempList = [];
    },
    remove(id) {
      let index = -1;
      index = this.leftList.findIndex((item) => item[this.idKey] === id);
      if (index !== -1) {
        this.leftList.splice(index, 1);
      } else {
        index = this.rightList.findIndex((item) => item[this.idKey] === id);
        if (index !== -1) this.rightList.splice(index, 1);
      }
      index = this.list.findIndex((item) => item[this.idKey] === id);
      if (index !== -1) this.$emit('change', this.list.splice(index, 1));
    },
    modify(id, key, value) {
      let index = -1;
      index = this.leftList.findIndex((item) => item[this.idKey] === id);
      if (index !== -1) {
        this.leftList[index][key] = value;
      } else {
        index = this.rightList.findIndex((item) => item[this.idKey] === id);
        if (index !== -1) this.rightList[index][key] = value;
      }
      index = this.list.findIndex((item) => item[this.idKey] === id);
      if (index !== -1) {
        let data = this.cloneData(this.list);
        data[index][key] = value;
        this.$emit('change', data);
      }
    }
  }
};
</script>

<style scoped lang="less">
@import './style.less';
</style>