import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    minify: "esbuild", 
    rollupOptions: {
      external: ["react-devtools"],
    },
  },
  plugins: [react(), mode === "development" ? [] : []].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

// export default defineConfig({
//   plugins: [react()],
// })
