import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['orm.woff2','oswald.woff2', 'snake.json', 'favicon.svg', 'snake-logo-180.png'],
    manifest: {
      name: 'One-Rep-Max Calculator',
      short_name: 'One-Rep-Max',
      description: 'Fill in the lifted weight and repetitions to estimate your one rep max.',
      
      id: '/orm/',
      start_url: '/orm/',
      scope: '/orm/',

      display: 'standalone',
      display_override: ['standalone', 'minimal-ui','window-controls-overlay'],
      orientation: 'portrait',
      
      background_color: "#23373a",
      theme_color: "#23373a",

      prefer_related_applications: false, 
      categories: ["fitness", "health", "utilities"],
      icons: [
      {
        src: 'snake-logo-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'snake-logo-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'snake-logo-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    screenshots: [
      {
        src: "screenshots/screenshot-mobile-540.jpeg",
        sizes: "540x720",
        type: "image/jpeg",
        form_factor: "narrow"
      },
      {
        src: "screenshots/screenshot-desktop-1280.jpeg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide"
      }
    ] 
    },
    
    workbox: {
      navigateFallback: '/orm/index.html'
    },
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
