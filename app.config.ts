/*
@author LxingA
@project CodeInk
@name Global
@date 28/03/24 11:30PM
@description Configuración General de la Aplicación Móvil para Expo
*/
import Configuration from './app/media/app.json' assert {type:"json"};
import type {ExpoConfig} from 'expo/config';

export default ({
    ...Configuration,
    version: "1.0.0"
} as ExpoConfig);