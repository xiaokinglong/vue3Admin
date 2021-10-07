import vue from "@vitejs/plugin-vue";
// 性能分析
import visualizer from "rollup-plugin-visualizer";
import analyze from "rollup-plugin-analyzer";

// gzip 压缩插件
import viteCompression from "vite-plugin-compression";

// 动态的切换 主题
import {
  viteThemePlugin,
  mixLighten,
  mixDarken,
  tinycolor,
} from "vite-plugin-theme";
import viteTips from "vite-plugin-tips";

const plugins = [
  vue(),
  analyze(),
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  }),
  viteCompression({
    //生成压缩包gz
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: "gzip",
    ext: ".gz",
  }),
  viteThemePlugin({
    // Match the color to be modified
    colorVariables: [],
  }),
  
];

if (process.env.NODE_ENV !== 'development') {
  console.log('ceshi')
  // plugins.push(viteTips());
}
export default plugins;
