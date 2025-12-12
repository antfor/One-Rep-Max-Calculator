import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['orm.woff2','oswald.woff2', 'snake.json'],
    manifest: {
      name: 'One-Rep-Max Calculator',
      short_name: 'One-Rep-Max',
      description: 'Fill in the lifted weight and repetitions to estimate your one rep max.',
      icons: [
      {
        src: 'snake-logo-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'snake-logo-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
    }
  }),
  ],

  base: "/orm/",

  server: {
    host: 'local.anton-forsberg.com',
    allowedHosts: ['local.anton-forsberg.com'],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/react/')) return 'react';
            if (id.includes('/react-dom/')) return 'react-dom';
            if (id.includes('lottie-web')) return 'lottie';
            if (id.includes('@fortawesome')) return 'icons';
            return 'vendor';
          }
        },
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        //api: "modern-compiler",
        quietDeps: true,
        silenceDeprecations: ["import", "color-functions", "global-builtin"],
      },
    },
  },

  resolve: {
    alias: {
      src: "/src",
      scss: "/src/bootstrap"
    },
  },

})
