<template>
	<n-config-provider :theme="themes">
		<!-- <n-global-style> -->
			<router-view />
		<!-- </n-global-style> -->
	</n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { NConfigProvider, darkTheme, } from 'naive-ui';
import { useStore } from './store'
const store = useStore();

const themes = computed(() => {
	console.log(12)
	return store.$state.theme ? darkTheme : null
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
.n-config-provider {
		width: 100%;
	height: 100%;
}
</style>
