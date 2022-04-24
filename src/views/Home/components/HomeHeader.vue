<template>
<div class="home-header">
  <img src="@/assets/logo.png">
  <div class="search">
    <van-icon name="search" size="0.5rem"></van-icon>
  </div>
  <van-icon class="cate" name="wap-nav"></van-icon>
</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
img {
  height: 20px;
}
.home-header {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  img {
    height: 25px;
    padding: 0 10px;
  }
  .search {
    width: 100%;
    border-radius: 25px;
    padding-left: 10px;
    background-color: #f7f7f7;

  }
  .cate {
    padding: 0 10px;
  }
}
</style>