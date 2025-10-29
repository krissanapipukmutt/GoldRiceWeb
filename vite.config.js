import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base so built assets work on any subpath (e.g., GitHub Pages)
  base: './',
})
