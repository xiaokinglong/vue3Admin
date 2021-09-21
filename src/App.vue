<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const { state } = useStore();

onMounted(() => {
	document.title = state.app;
})

</script>

<style>
html,
body {
	width: 100%;
	height: 100%;
}
#app {
	width: 100%;
	height: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
