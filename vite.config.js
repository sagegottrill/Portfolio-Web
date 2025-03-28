import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 1000, // 1000 KB (increase the limit if necessary)

    rollupOptions: {
      output: {
        // Manual chunking to split node_modules and large packages into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // You can chunk by specific packages here, for example:
            return id.split('node_modules/')[1].split('/')[0]; // Split by package name
          }
        },
      },
    },
  },
})
