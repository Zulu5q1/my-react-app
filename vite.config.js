import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api-search': {
        target: 'https://google.serper.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-search/, '/search'),
      },
    },
  },
})
