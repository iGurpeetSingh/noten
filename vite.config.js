import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on all network interfaces so phones on the same Wi-Fi can open the app
    host: true,
    port: 5174,
    strictPort: true,
    // Disable host-header blocking for LAN access (mobile devices)
    allowedHosts: true,
    hmr: {
      // Use the machine's LAN IP so Hot Module Replacement works from mobile too
      host: '192.168.31.246',
      port: 5174,
    },
  },
})

