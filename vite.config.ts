import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// 性能分析
// import visualizer from "rollup-plugin-visualizer";
// import analyze from "rollup-plugin-analyzer";

import plugins from './viteConfig/plugins';
// 打包的配置
const build = {
  sourcemap: true,
  brotliSize: false, // vite在打包中会计算包的大小，但是只是计算不做处理，会长打包时间
};

const server = {
  open: true,
};

console.log({
  process: process,
});
// https://vitejs.dev/config/
export default defineConfig({
  build,
  server,
  plugins,
});
