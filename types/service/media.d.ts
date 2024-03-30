/*
@author LxingA
@project CodeInk
@name Global
@date 18/03/24 10:30PM
@description Definición del Prototipo para el Contexto de la Aplicación Media del Proyecto
*/
import type Pagination from "../pagination";

/** Definición de los Tipos de Medios Disponibles en la Aplicación */
export type MediaType = "anime" | "game" | "music" | "video" | "unknown";

/** Definición de las SubCategorías de las Categorías para la Aplicación */
export type CategoryChildren = {
    /** Nombre de la Etiqueta para la SubCategoría */
    label: string,
    /** Identificador Único de la SubCategoría */
    identified: string
};

/** Tipo para la Definición del Objeto para las Categorías en los Medios */
export type MediaCategory = {
    /** Identificador Único de la Categoría */
    id: string,
    /** Nombre de Etiqueta para la Categoría */
    label: string,
    /** Contenedor con los SubCategorías de la Categoría Obtenida */
    item: CategoryChildren[]
};

/** Definición del Objeto con la Información del Reducedor de la Aplicación */
export interface MediaObject {
    /** Definición del Contexto Global de la Aplicación para la Instancia de los Medios */
    contextView: MediaType,
    /** Objeto con la Información de la Paginación Global de la Aplicación */
    pagination: Pagination,
    /** Objeto para la Definición del Filtro de un Medio para la Aplicación (categoryID:childrenID) */
    filter: string[],
    /** Definición del Contexto de Búsqueda de los Medios en la Aplicación */
    search?: string
}

/** Definición de la Interfaz Global de las Categorías para la Aplicación */
export interface Category {
    /** Nombre de la Categoría */
    name: string,
    /** Descripción Acerca del Propósito de la Categoría */
    description?: string,
    /** Objeto con las SubCategorías de la Categoría */
    children?: CategoryChildren[],
    /** Identificador Único de la Categoría (8L) */
    identified: string
};

export interface Media {
    /** Nombre del Medio Original sin Alteraciones */
    name: string,
    /** Descripción Acerca del Medio en Punto de Vista del Administrador */
    description?: string,
    /** Número de Calificación del Medio (1~5) */
    rate?: number,
    /** Objeto con las Categorías Asociadas al Medio */
    meta?: MediaCategory[],
    /** Objeto con la Información de las Imágenes del Medio */
    media: {
        /** Ruta Relativa de la Portada del Medio */
        cover?: string,
        /** Ruta Relativa del Fondo de Pantalla del Medio */
        background?: string,
        /** Contenedor con las Capturas de Pantalla del Medio */
        snapshot?: string[]
    },
    /** Identificador Único del Medio */
    identified: string
};