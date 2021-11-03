<template>
  <div class="theme">
    <n-switch v-model:value="theme" @update:value="handleThemeChange" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { NSwitch } from 'naive-ui';
import { useStore } from '../store/index';
// const { theme, $patch, changeTheme } = useStore();
const stroe = useStore();
console.log(stroe)
const theme = computed(() => stroe.$state.theme);
const handleThemeChange = (value: boolean) => {
  // $patch({ theme: value });
  stroe.changeTheme(value);
}
</script>


<style lang="less" scoped>
.theme {
  margin: 0 12px;
}
</style>