import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
  ],


  test: {
    environment: 'jsdom', // Ensures Vitest runs in a browser-like environment
    globals: true, // Allows Jest-like globals (test, expect, etc.)
    setupFiles: './vitest.config.js', // Optional setup file for additional configs
  },

  preview: {
    port: 5173,
    strictPort: true,
  },

  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
   },

})
