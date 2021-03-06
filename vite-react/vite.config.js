import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { getThemeVariables } from 'antd/dist/theme'
import path from 'path'

console.log(path.resolve(__dirname, 'src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          ...getThemeVariables({
            dark: true,
          }),
          ...{
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
