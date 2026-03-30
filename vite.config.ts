import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@icons': path.resolve(__dirname, 'src/vendor/icons'),
      'glow-ds/tokens': path.resolve(__dirname, 'src/vendor/glow-dist/tokens.js'),
      'glow-ds/components': path.resolve(__dirname, 'src/vendor/glow-dist/components.js'),
      'glow-ds': path.resolve(__dirname, 'src/vendor/glow-dist/index.js'),
    },
  },
  server: {
    port: 5180,
  },
})
