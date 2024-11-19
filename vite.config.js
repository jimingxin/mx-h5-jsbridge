import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/jsBridge.js',
      name: 'mx-h5-jsbridge',
      fileName: 'jsBridge',
    },
  },
})
