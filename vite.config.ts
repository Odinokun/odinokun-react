import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// don't forget update tsconfig.json for path aliases
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@common': '/src/common',
      '@modules': '/src/modules',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@theme': '/src/theme',
      '@typings': '/src/typings',
    },
  },
});
