import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Ecommerce-Project/' : '/'
})

