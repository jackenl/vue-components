<template>
  <div class="container">
    <i-waterfall v-model="list">
      <template v-slot:left="{ leftList }">
        <div class="column">
          <div class="item" v-for="(item, index) in leftList" :key="index" :style="item.style"></div>
        </div>
      </template>
      <template v-slot:right="{ rightList }">
        <div class="column">
          <div class="item" v-for="(item, index) in rightList" :key="index" :style="item.style"></div>
        </div>
      </template>
    </i-waterfall>
  </div>
</template>

<script>
const logo = require('../../assets/logo.png');

export default {
  data() {
    return {
      list: [],
      logo
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      for (let i = 0; i < 10; i++) {
        this.list.push({
          style: {
            width: '100%',
            height: Math.floor(Math.random() * 250) + 'px',
            backgroundColor: `rgb(${this.colorSize()}, ${this.colorSize()}, ${this.colorSize()})`
          }
        });
      }
    },
    colorSize() {
      return Math.floor(Math.random() * 255);
    }
  }
};
</script>

<style lang="less" scoped>
.img {
  display: block;
}
</style>
