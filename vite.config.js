import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    base: '/spatial-dev-hub/',
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer]
        }
    },
})
