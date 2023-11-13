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
        rewrite: (path) => path.replace(`/api/`, `/`),
      },
    },
  },
})
