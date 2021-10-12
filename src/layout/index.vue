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
        <div class="header-box">
          <User />
          <Theme />
        </div>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script lang="ts" setup>
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from 'naive-ui';
import Logo from '../components/Logo.vue';
import Menus from '../components/Menus.vue';
import Theme from '../components/theme.vue';
import User from '../components/user.vue';
const toggleCollapsed = (collapsed: boolean) => {
  console.log(collapsed)
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
  .header-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.n-layout-header,
.n-layout-footer {
  padding: 7px 0px;
}
</style>