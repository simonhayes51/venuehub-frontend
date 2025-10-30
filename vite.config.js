import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  preview: {
  host: true,
  port: Number(process.env.PORT) || 8080,
  strictPort: true,
  allowedHosts: [
    'venuehub-frontend-production.up.railway.app',
    '.up.railway.app'
  ],
  headers: {
    'Cache-Control': 'public, max-age=600, immutable'
  }
},
server: {
  host: true
}resolve: { alias: { '@': new URL('./src', import.meta.url).pathname } },
  plugins: [react()],
  build: { outDir: "dist" }
});
