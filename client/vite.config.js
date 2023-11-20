import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":"https://assignment-git-main-jerrys-projects-43271729.vercel.app/"
    }
  }
})
