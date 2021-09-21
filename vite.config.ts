import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 打包的配置
const build = {
  sourcemap: true,
};

const  server = {
  open: true,
};

console.log({
  process: process.cwd()
})
// https://vitejs.dev/config/
export default defineConfig({
  build,
  server,
  plugins: [vue()]
})
