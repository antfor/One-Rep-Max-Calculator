import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: 'local.anton-forsberg.com',
    allowedHosts: ['local.anton-forsberg.com'],
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
