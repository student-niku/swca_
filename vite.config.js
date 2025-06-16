import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Yeh function syntax sahi hai, yeh dono mode handle karega
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/swca_/' : '/',
  plugins: [react()],
}))

