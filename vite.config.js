import {defineConfig, loadEnv} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
        ],
        build: {
            emptyOutDir: false
        },
        define: {
            'process.env.VITE_ENV': JSON.stringify(env.VITE_ENV)
        }
    }
});
