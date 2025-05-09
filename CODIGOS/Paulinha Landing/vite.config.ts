import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['framer-motion'],
      output: {
        globals: {
          'framer-motion': 'framerMotion'
        }
      }
    }
  },
});
