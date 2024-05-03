import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "index",
      fileName: "index",
      entry: "./src/components/Loader",
      formats: ["es", "umd", "cjs"],
    },
    minify: true,
    emptyOutDir: true,

    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        dir: "dist",
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      rollupTypes: true,
      entryRoot: "src/types",
      outDir: "dist/@types/",
    }),
  ],
});
