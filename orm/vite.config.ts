import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: 'local.anton-forsberg.com',
    allowedHosts: ['local.anton-forsberg.com'],
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react'; 
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
