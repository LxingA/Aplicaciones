/*
@author LxingA
@project CodeInk
@name Global
@date 22/03/24 04:30PM
@description Definición del Prototipo para el Objeto de la Paginación Global del Proyecto
*/

/** Prototipo del Objeto con la Información de un Paginador de un Aplicación */
interface Pagination {
    /** Número de Elementos a Mostrar por Página */
    perPage: number,
    /** Página Actual en el Paginador */
    currentPage: number,
    /** Número Total de Elementos de la Base de Datos */
    total: number,
    /** Indicar sí se Está Cargando el Contexto del Paginador */
    loader: boolean
};

export default Pagination;