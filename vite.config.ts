/*
@author LxingA
@project CodeInk
@name Global
@date 29/02/24 02:40AM
@description Integración de Vite como Servidor HTTP para la Aplicación
*/
import {defineConfig} from 'vite';
import {readFileSync} from 'fs';
import React from '@vitejs/plugin-react';
const port = Number(readFileSync("./port.sc","utf8"));

/** Definición de la Configuración Inicial de Vite */
export default defineConfig({
    plugins: [
        React()
    ],
    server: {
        port,
        strictPort: true,
        hmr: {
            host: "localhost",
            protocol: "ws",
            port
        }
    },
    build: {
        outDir: "static"
    },
    envPrefix: "CkAppEnvironment"
});