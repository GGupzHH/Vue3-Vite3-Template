import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve: {
  //   alias: [
  //     {
  //       find: '@',
  //       replacement: path.resolve(__dirname, 'src')
  //     }
  //   ]
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/element-variables.scss';"
      }
    }
  }
})
