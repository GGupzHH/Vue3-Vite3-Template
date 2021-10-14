import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugins-terser'
const path = require('path')

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml (html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>UPro</title>'
      )
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    htmlPlugin(),
    terser(
      {
        compress: {
          drop_console: true
        }
      }
    )
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'store',
        replacement: path.resolve(__dirname, 'src/store')
      },
      {
        find: 'comps',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      {
        find: 'modules',
        replacement: path.resolve(__dirname, 'src/modules')
      },
      {
        find: 'router',
        replacement: path.resolve(__dirname, 'src/router')
      },
      {
        find: 'widgets',
        replacement: path.resolve(__dirname, 'src/widgets')
      },
      {
        find: 'mixins',
        replacement: path.resolve(__dirname, 'src/mixins')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/element-variables.scss';"
      }
    }
  }
})
