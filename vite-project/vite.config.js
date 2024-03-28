import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  "proxy": {
    "/api/yandexAI": {
      "target": "https://api.ai.yandex.net",
      "changeOrigin": true,
      "pathRewrite": {
        "^/api/yandexAI": ""
      }
    }
  },
  plugins: [react()],
    optimizeDeps: {
        exclude: ['chun']
    }
})
