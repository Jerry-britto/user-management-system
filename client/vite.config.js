import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:"https://deploy-mern-api-rose.vercel.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        onError: (err) => {
          console.error('Proxy Error:', err);
        },
      }
    }
  }
})
