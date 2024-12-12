import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylelint from "vite-plugin-stylelint";
import svgr from "vite-plugin-svgr";
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        stylelint({
            fix: true,
        }),
        svgr(),
        reactRefresh({
            exclude: [/node_modules/],
            include: ['**/*.tsx', '**/*.module.scss, \'**/*.scss'],
        }),
    ],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    server: {
        hmr: {
            overlay: false,
        },
    },
})
