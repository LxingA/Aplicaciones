/*
@author LxingA
@project CodeInk
@name Global
@date 09/03/24 05:30PM
@description Definición de la Configuración General de las Aplicaciones construidas en React Native con Expo
*/
import {ExpoConfig,ConfigContext} from 'expo/config';
import AppConfig from './app/inkexpress/app.json' assert {type:"json"};

/** Definición de la Información General de las Aplicaciones Movíles del Proyecto */
export default ({config}:ConfigContext): Partial<ExpoConfig> => {
    return ({
        ...config,
        ...AppConfig
    });
};