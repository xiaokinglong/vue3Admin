<template>
  <div class="menus">
    <n-menu :options="menuOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NMenu } from 'naive-ui'
const menuOptions = ref([
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
  },
  {
    label: '叙事者',
    key: 'narrator',
  },
  {
    label: '羊男',
    key: 'sheep-man',
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
  }
]);

</script>
