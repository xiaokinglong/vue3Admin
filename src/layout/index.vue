<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff;">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { ref, Ref } from 'vue';
const selectedKeys: Ref<string[]> = ref(['1']);
const collapsed: Ref<boolean> = ref(false);

</script>
<style lang="less" scoped>
.layout {
	width: 100%;
	height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
	padding: 0 24px;
	cursor: pointer;
	line-height: 64px;
	font-size: 18px;
	transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
	color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
	margin: 16px;
	height: 32px;
	background: rgba(255, 255, 255, .3);
}

.site-layout .site-layout-background {
	background: #fff;
}
</style>
