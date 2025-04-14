// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/swca_/', // यही जरूरी है GitHub Pages के लिए
})
