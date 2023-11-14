import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteEslint()],
  resolve: {
    alias: {
      '@': resolve(__dirname, `src`),
      api: resolve(__dirname, `src/api`),
      assets: resolve(__dirname, `src/assets`),
      store: resolve(__dirname, `src/store`),
      utils: resolve(__dirname, `src/utils`),
      router: resolve(__dirname, `src/router`),
      views: resolve(__dirname, `src/views`),
    },
  },
  base: `./`,
  server: {
    port: 4000,
    open: true,
    cors: true,

    // 设置代理
    proxy: {
      '/api': {
        target: ``,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ``),
      },
    },
  },
})
