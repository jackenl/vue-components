<template>
  <div class="nav-item" @click="handleClick">
    <div class="nav-item-icon">
      <img v-if="value.icon" class="icon-img" :src="value.icon">
      <div v-else class="icon-text" :style="{ color: iconColor }">{{ value.name[0] }}</div>
    </div>
    <div class="nav-item-title">{{ value.title }}</div>
    <div class="nav-item-name">{{ value.name }}</div>
  </div>
</template>

<script>
export default {
  name: 'nav-item',
  props: {
    value: Object
  },
  data() {
    return {
      iconColor: ''
    }
  },
  mounted() {
    this.initColor();
  },
  methods: {
    initColor() {
      this.iconColor = `rgb(${this.colorSize()}, ${this.colorSize()}, ${this.colorSize()})`;
    },
    colorSize() {
      return Math.floor(Math.random() * 255);
    },
    handleClick() {
      const { path } = this.value;
      this.$router.push(path);
    }
  }
}
</script>

<style lang="less" scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 125px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
}
.nav-item-icon {
  width: 25px;
  height: 25px;
}
.nav-item-title {
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
}
.nav-item-name {
  margin-top: 4px;
}
.icon-img,
.icon-text {
  display: block;
  width: 100%;
  height: 100%;
}
.icon-text {
  font-size: 12px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
}
</style>
