import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      name: "Loader",
      entry: "./src/components/Loader.tsx",
      formats: ['es', 'cjs', 'umd']
    }
  },
  plugins: [react()],
})
