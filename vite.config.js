import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
// https://vitest.dev/guide/reporters.html
// TODO : .env
export default defineConfig({
  resolve: {
    alias: {
      '@react-cupertino-ui/shared/lib/utils': path.resolve(__dirname, 'node_modules/@react-cupertino-ui/shared/dist/lib/utils.js'),
      '@react-cupertino-ui/shared/lib/interfaces/BaseProps': path.resolve(__dirname, 'node_modules/@react-cupertino-ui/shared/dist/lib/interfaces/BaseProps.js'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
        includePaths: [path.resolve(__dirname, './src')],
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true
      },
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    css: false,
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/e2e/**',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/vitest.setup.ts',
        '**/vite.config.js',
        '**/playwright.config.ts',
        '**/.{idea,git,cache,output,temp}/**',
        '**/mocks/**',
        '**/types/**',
      ],
    },
  },
})
