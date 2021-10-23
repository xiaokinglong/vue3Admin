<template>
  <div
    class="home"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
  >
    <TransitionAnimation>home</TransitionAnimation>
  </div>
</template>

<script lang="ts" setup>
import Vue from 'vue'
import TransitionAnimation from '../../components/transitionAnimation.vue'

</script>

<style lang="less" scoped>
</style>