import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Yeh line me mode ko destructure kar rahe hain
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/swca_/' : '/',
    plugins: [react()],
  }
})
