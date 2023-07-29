<template>
  <div class="banner" :style="{ 'background-image': 'url(' + url + ')' }">
    <slot></slot>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less" scoped>
@import "./index.less";
</style>