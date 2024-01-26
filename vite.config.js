import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ 
  plugins: [
    react({
      include: ['**/*.jsx', '**/*.js', '**/*.ts', '**/*.tsx'],
    })
  ],
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components"
    },
  },
});
