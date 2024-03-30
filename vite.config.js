import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({ 
  plugins: [
    react({
      include: ['**/*.jsx', '**/*.js', '**/*.ts', '**/*.tsx'],
    })
  ],
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/components',
      '@json': '/json',
      '@images': '/images',
      '@utils': '/utils',
	  '@audio': '/audio',
	  '@server': '/server',
    },
  },
});
