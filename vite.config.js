import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:true,
    open:true,
    port:8089
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "${resolve(__dirname, "src/assets/style/global.less")}";`,
      },
    },
  },
})
