<template>
  <div class="transitionAnimation">
    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div>组件动画</div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { Transition } from 'vue'
const beforeEnter = (v) => {
  console.log(v)
  console.log('beforeEnter')
}
const enter = (v) => {
  console.log(v)
  console.log('enter')
};
const afterEnter = (v) => {
  console.log(v)
  console.log('afterEnter')
};

const enterCancelled = (v) => {
  console.log(v)
  console.log('enterCancelled')
};
const beforeLeave = (v) => {
  console.log(v)
  console.log('beforeLeave')
};
const leave = (v) => {
  console.log(v)
  console.log('leave')
};
</script>

<style lang="less">
@keyframes comein {
  0% {
    transform: translateX(-120px);
    color: black;
  }
  100% {
    transform: translateX(0px);
    color: red;
  }
}
@keyframes comeout {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-120px);
  }
}
.v-enter-active {
  animation: comein 1s;
}
.v-leave-active {
  animation: comeout 1s;
}
</style>