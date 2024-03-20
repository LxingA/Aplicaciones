/*
@author LxingA
@project CodeInk
@name Global
@date 18/03/24 10:30PM
@description Definición del Prototipo para el Contexto de la Aplicación Media del Proyecto
*/

/** Definición de los Tipos de Medios Disponibles en la Aplicación */
export type MediaType = "anime" | "game" | "music" | "video" | "unknown";

/** Definición de las SubCategorías de las Categorías para la Aplicación */
export type CategoryChildren = {
    /** Nombre de la Etiqueta para la SubCategoría */
    label: string,
    /** Identificador Único de la SubCategoría */
    identified: string
};

/** Definición del Objeto con la Información del Reducedor de la Aplicación */
export interface MediaObject {
    /** Definición del Contexto Global de la Aplicación para la Instancia de los Medios */
    contextView: MediaType
}

/** Definición de la Interfaz Global de las Categorías para la Aplicación */
export interface Category {
    /** Nombre de la Categoría */
    name: string,
    /** Descripción Acerca del Propósito de la Categoría */
    description?: string,
    /** Objeto con las SubCategorías de la Categoría */
    children?: CategoryChildren[]
};