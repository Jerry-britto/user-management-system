import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":"https://deploy-mern-api-rose.vercel.app"
    }
  }
})
