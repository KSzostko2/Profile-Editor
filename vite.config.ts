/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
    netlify(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
