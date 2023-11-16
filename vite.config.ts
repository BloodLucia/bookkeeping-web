import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { svgsprites } from './vite_plugins/svgsprites'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/": {
        target: "http://127.0.0.1:8888/api/v1",
        changeOrigin: false
      }
    }
  },
  plugins: [
    react(),
    UnoCSS(),
    svgsprites({ noOptimizeList: ['pig', 'logo', 'chart', 'category', 'export', 'noty', 'calendar'] })
  ],
})
