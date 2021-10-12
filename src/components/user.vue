<template>
  <div class="user-info">
    <n-dropdown :options="userOptions">
      <n-avatar round :size="48" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    </n-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { NDropdown, NAvatar, NIcon } from 'naive-ui';

import { h, ref } from 'vue';



const userOptions = ref([
  {
    label: '用户资料',
    key: 'profile',
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
  },
  {
    label: '退出登录',
    key: 'logout',
  }
])

</script>

<style lang="less" scoped>
.user-info {
  margin: 0 12px;
}
</style>