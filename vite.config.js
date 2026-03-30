import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 1. Explicitly use esbuild to avoid Oxc hanging issues in Vite 7
    minify: 'esbuild',
    // 2. Ensure CSS code splitting is handled correctly
    cssCodeSplit: true,
    // 3. Rollup options to prevent memory leaks during large builds
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  // 4. Force Vite to ignore heavy folders that might trigger scanning loops
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
})