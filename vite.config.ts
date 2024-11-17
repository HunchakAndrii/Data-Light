import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Data-Light/',
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/scss/utils/_index.scss" as *;
          @use "src/scss/main/_index.scss" as *;
        `
      }
    }
  }
})






