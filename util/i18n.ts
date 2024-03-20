/*
@author LxingA
@project CodeInk
@name Global
@date 06/03/24 08:00PM
@description Integración de i18n para las Aplicaciones
*/
import Language from 'i18next';
import Resource from 'i18next-resources-to-backend';
import type {i18n,InitOptions} from 'i18next';

/**
 * Realizar la Integración de i18n en las Aplicaciones para varios idiomas
 * @param $name$ Nombre de la Aplicación
 */
const $Language$ = ($name$:string): i18n => {
    Language["use"](
        Resource((language:string) => import(`../i18n/${language}/${$name$}.json`))
    )["init"]({
        lng: navigator["language"]["substring"](0,2),
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    } as InitOptions);return Language;
};

export default $Language$;