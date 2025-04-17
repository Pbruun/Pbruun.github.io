import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  build:{
    commonjsOptions:{
      exclude:['zlib-sync']
    },
    lib: {
      entry: 'src/main.js',
      formats: ['es'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions:['.js', '.json', '.ts', '.vue']
  },
  server:{
    allowedHosts:true
  }
})
