/*
@author LxingA
@project CodeInk
@name Global
@date 29/02/24 03:30AM
@description Configuración Inicial para la Aplicación
*/
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import {Provider as ReduxProvider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import $Initialization$ from './app';
import $GraphQL$ from './bin/graphql';
import $Language$ from './util/i18n';
import $Reducer$ from './bin/redux';

/** Inicialización de las Dependencias de las Aplicaciones del Proyecto */
createRoot(document["getElementById"]("root") as HTMLElement)["render"](
    <React.StrictMode>
        <I18nextProvider i18n={$Language$}>
            <ApolloProvider client={$GraphQL$}>
                <ReduxProvider store={$Reducer$}>
                    <$Initialization$ />
                </ReduxProvider>
            </ApolloProvider>
        </I18nextProvider>
    </React.StrictMode>
);