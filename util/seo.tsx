/*
@author LxingA
@project CodeInk
@name Global
@date 16/03/24 01:00AM
@description Definición de las Herramientas Esenciales para el SEO de la Aplicación
*/
import {Helmet as Head} from 'react-helmet';

/** Prototipo para los Argumentos Esenciales para el SEO del Proyecto */
export type SEO = {
    /** Definición del Título de una Página de una Aplicación */
    $title$: string,
    /** Contenedor con Todas las Palabras Claves para el SEO de la Aplicación */
    $keywords$?: string[],
    /** Descripción Acerca de la Aplicación para el SEO */
    $description$?: string
};

/** Definición de la Cabecera Dinámica para las Aplicaciones */
const $SEO$ = ({$title$,$keywords$,$description$}:SEO) => {
    const $container_to_string$ = ($value$:string[]): string => {
        let $__str__$ = "";
        for(let $y$ = 0; $y$ <= ($value$["length"] - 1); $y$++) $__str__$ += $value$[$y$] + (($y$ < ($value$["length"] - 1)) ? "," : "");
        return $__str__$;
    };
    return (
        <Head>
            <title>{$title$}</title>
            {($keywords$ && $keywords$["length"] > 0) && (
                <meta name="keywords" content={$container_to_string$($keywords$)}/>
            )}
            {$description$ && (
                <meta name="description" content={$description$}/>
            )}
            <meta name="google" content="nopagereadaloud"/>
            <meta name="google" content="nositelinkssearchbox"/>
            <meta name="googlebot" content="notranslate"/>
        </Head>
    );
};

export default $SEO$;