import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(),
    //svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',  // Si tienes algún archivo de configuración
  },
}



)
