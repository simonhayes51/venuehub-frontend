import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Vite config as an async function so we can optionally load React plugin
export default async () => {
  const plugins = [];
  try {
    const react = (await import('@vitejs/plugin-react')).default;
    plugins.push(react());
  } catch (e) {
    // @vitejs/plugin-react not installed — that's fine (no React)
  }

  return defineConfig({
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
    },
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
    build: {
      sourcemap: false
    }
  });
};