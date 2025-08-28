import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/React_Vite_Cicd_Github_New_WorldAtlas1-/",
  server:{
    open: true,
    port: 3001,
  }
})
