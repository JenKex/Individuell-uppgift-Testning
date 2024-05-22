import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
	port: 7500,  // pick any port number
	host: true   // this is the critical setting
  },
  base: './'   // make relative URLs work better with GitHub Pages
  ,
  test: {
    environment: 'jsdom',
    globals: true,
    }
})