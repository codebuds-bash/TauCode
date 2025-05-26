
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
  },
  build: {
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});