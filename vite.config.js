import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';
import { readFileSync } from 'fs';

const baseFolder =
    process.env.APPDATA !== undefined && process.env.APPDATA !== ''
        ? `${process.env.APPDATA}/ASP.NET/https`
        : `${process.env.HOME}/.aspnet/https`;

const certificateArg = process.argv.map(arg => arg.match(/--name=(?<value>.+)/i)).filter(Boolean)[0];
const certificateName = certificateArg ? certificateArg.groups.value : process.env.npm_package_name;

if (!certificateName) {
    console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.');
    process.exit(-1);
}

const certFilePath = join(baseFolder, `${certificateName}.pem`);
const keyFilePath = join(baseFolder, `${certificateName}.key`);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: './dist',
    },
    server: {
        https: {
            key: readFileSync(keyFilePath),
            cert: readFileSync(certFilePath)
        },
        port: 8080,
        logLevel: 'info',
        strictPort: true,
        proxy: {
            '/aspnetapi': {
                target: 'https://localhost:5001',
                changeOrigin: false,
                secure: false,
                rewrite: (path) => path.replace(/^\/aspnetapi/, ''),
            },
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    }
});