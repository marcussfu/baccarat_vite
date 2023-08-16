import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // alias: {
  //   '@': path.resolve(__dirname, '/src'),
  //   comps: path.resolve(__dirname, 'src/components'),
  //   apis: path.resolve(__dirname, 'src/apis'),
  //   views: path.resolve(__dirname, 'src/views'),
  //   utils: path.resolve(__dirname, 'src/utils'),
  //   router: path.resolve(__dirname, 'src/router'),
  //   styles: path.resolve(__dirname, 'src/styles'),
  //   plugins: path.resolve(__dirname, 'src/plugins'),
  // },
  plugins: [
    vue(),
    // 添加下面这块
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  server: {
    proxy: {
      '/chatHub': 'http://localhost:5214/chatHub',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
