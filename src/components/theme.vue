<template>
  <div class="theme">
    <n-switch v-model:value="state.theme" @update:value="handleThemeChange" />
  </div>
</template>

<script lang="ts" setup>
import { NSwitch } from 'naive-ui';
import { useStore } from 'vuex';
const { state, commit } = useStore();

const handleThemeChange = (value: boolean) => {
  commit('changeTheme', value)
}
</script>


<style lang="less" scoped>
.theme {
  margin: 0 12px;
}
</style>