import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { env } from 'process'

const target = env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
    : 'https://localhost:7027'

// ----- Vite config -----
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
    },
    server: {
        https: {
            key: fs.readFileSync('./vite-localhost-key.pem'),
            cert: fs.readFileSync('./vite-localhost.pem'),
        },
        port: 63405,
        strictPort: true,
        hmr: { protocol: 'wss', host: 'localhost', port: 63405 },
        proxy: {
            '^/api': { target, secure: false },
            '^/(api|auth|signalr)(/|$)': {
                target: 'https://localhost:7027',
                secure: false,        // dev cert
                changeOrigin: true,
                ws: true              // useful if you use websockets/SignalR
            }
        }
    },
    build: {
        outDir: "../web-BcoleGardiner.Server/wwwroot", 
        emptyOutDir: true, // clears old assets
    },
})