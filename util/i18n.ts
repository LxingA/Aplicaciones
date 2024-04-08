/*
@author LxingA
@project CodeInk
@name Global
@date 06/03/24 08:00PM
@description Integración de i18n para las Aplicaciones
*/
import {initReactI18next} from 'react-i18next';
import type {InitOptions} from 'i18next';
import Engine from 'i18next';
import Language from '../app/language.json';

/** Configuración Inicial de la Aplicación */
Engine["use"](initReactI18next)["init"]({
    resources: Language,
    compatibilityJSON: "v3",
    lng: "es",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
} as InitOptions);

export default Engine;