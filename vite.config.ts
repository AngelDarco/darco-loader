import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      name: "Loader",
      entry: "./src/components/Loader.tsx",
      formats: ['es', 'cjs', 'umd']
    }
  },
  plugins: [
    cssInjectedByJsPlugin(),
    react()],
})
