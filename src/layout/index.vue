<template>
  <n-layout class="layout" has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      position="static"
      show-trigger="bar"
      @on-update="toggleCollapsed"
    >
      <Logo />
      <Menus />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <n-switch v-model:value="state.theme" @update:value="handleThemeChange" />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script lang="ts" setup>
import { NLayout, NLayoutContent, NSwitch, NLayoutHeader, NLayoutSider } from 'naive-ui';
import Logo from '../components/Logo.vue';
import Menus from '../components/Menus.vue';
import { useStore } from 'vuex';
const { state, commit } = useStore();
// const { state, commit } = useStore();

const toggleCollapsed = (collapsed: boolean) => {
  console.log(collapsed)
}
const handleThemeChange = (value: boolean) => {
  commit('changeTheme', value)
}
</script>

<style lang="less">
.layout {
  width: 100%;
  height: 100%;
  background-color: red;
  .n-layout {
    /deep/ .n-layout-sider-scroll-container {
      background-color: red;
    }
  }
}
.n-layout-header,
.n-layout-footer {
  padding: 24px;
}
</style>