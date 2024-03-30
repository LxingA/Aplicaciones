/*
@author LxingA
@project CodeInk
@name Global
@date 22/03/24 04:30PM
@description Definición del Prototipo para el Objeto de la Paginación Global del Proyecto
*/

/** Definición del Objeto con los Totales de Elementos de la Paginación */
type PaginationTotal = {
    /** Total de Páginas a Mostrar en el DOM */
    pages: number,
    /** Total de Elementos a Mostrar en el DOM */
    elements: number,
    /** Número Total de Elementos en el Contenedor Actual para Mostrar en el DOM */
    current: number
};

/** Objeto de Respuesta de la API para un Contenido en Paginación */
export type APIResponse = {
    /** Contenedor con Todos los Elementos Manipulados para Mostrar */
    item: [],
    /** Objeto con la Información Total de Elementos Obtenidos */
    total: PaginationTotal
};

/** Prototipo del Objeto con la Información de un Paginador de un Aplicación */
interface Pagination {
    /** Número de Elementos a Mostrar por Página */
    perPage: number,
    /** Página Actual en el Paginador */
    currentPage: number,
    /** Objeto con el Número Total de Elementos de la Base de Datos */
    total: PaginationTotal,
    /** Indicar sí se Está Cargando el Contexto del Paginador */
    loader: boolean
};

export default Pagination;