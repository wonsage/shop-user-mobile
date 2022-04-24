<template>
  <home-header></home-header>
  <home-main></home-main>
  <bottom-docker></bottom-docker>
</template>

<script setup>
import HomeHeader from './components/HomeHeader.vue'
import HomeMain from './components/HomeMain.vue'
import BottomDocker from '@/components/BottomDocker.vue'
</script>

<style scoped>
p {
  width: 100px
}
</style>
