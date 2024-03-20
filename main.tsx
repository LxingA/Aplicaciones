/*
@author LxingA
@project CodeInk
@name Global
@date 29/02/24 03:30AM
@description Configuración Inicial para la Aplicación
*/
import * as React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {createRoot} from 'react-dom/client';
import $Initialization$ from './app';
import $Redux$ from './bin/redux';

/** Inicialización de las Dependencias de las Aplicaciones del Proyecto */
createRoot(document["getElementById"]("root") as HTMLElement)["render"](
    <React.StrictMode>
        <ReduxProvider store={$Redux$}>
            <$Initialization$ />
        </ReduxProvider>
    </React.StrictMode>
);