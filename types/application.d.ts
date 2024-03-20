/*
@author LxingA
@project CodeInk
@name Global
@date 10/03/24 03:45AM
@description Definición del Prototipo para los Parámetros Globales de las Aplicaciones
*/

/** Definición del Tipo para los Idiomas Globales de la Aplicación */
export type Language = {
    /** Nombre del Lenguaje Humano */
    label: string,
    /** Abreviatura del Lenguaje en ISO */
    iso: string,
    /** Establecer cómo un Idioma Principal del Proyecto */
    index: boolean
};

/** Definición del Prototipo para los Parámetros Esenciales de las Aplicaciones */
interface Application {
    /** Contenedor con los Idiomas Disponibles en el Proyecto */
    languages: Language[],
    /** Objeto con los Parámetros HTML a Establecer en las Aplicaciones del Proyecto */
    $html$: Record<string,boolean>,
    /** Definición del Tema Predeterminado para Todas las Aplicaciones del Proyecto */
    theme: string
};

export default Application;