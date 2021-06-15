<template>
  <div class="container">
    <i-grid>
      <i-grid-item v-for="(page, index) in pages" :key="index">
        <nav-item :value="page"></nav-item>
      </i-grid-item>
    </i-grid>
  </div>
</template>

<script>
import pages from '../page.config.js';

export default {
  data() {
    return {
      pages: pages
    };
  }
};
</script>

<style lang="less" scoped>
</style>
