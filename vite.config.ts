import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/auth": {
        target: "https://129.153.38.200.nip.io",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    // componentTagger se ha eliminado para compatibilidad con entornos de build
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist'
  }
}));