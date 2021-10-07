<template>
	<n-config-provider :theme="themes">
		<!-- <n-global-style> -->
			<router-view />
		<!-- </n-global-style> -->
	</n-config-provider>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { NConfigProvider, darkTheme, NGlobalStyle, } from 'naive-ui';

const { state } = useStore();

const themes = computed(() => {
	console.log(12)
	return state.theme ? darkTheme : null
	return  darkTheme
})
console.log(themes)
// onMounted(() => {
// 	document.title = state.app;
// })

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
