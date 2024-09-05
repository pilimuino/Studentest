import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default {
  plugins: [react()],
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



