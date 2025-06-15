// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/swca_/', // ये repo name है
  plugins: [react()],
})
