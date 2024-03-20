/*
@author LxingA
@project CodeInk
@name Global
@date 10/03/24 10:00PM
@description Definición del Prototipo para el Contexto Global de GraphQL para la Aplicación
*/

/** Interfaz con los Argumentos Esenciales del Contexto de GraphQL del Servidor API */
interface GraphQLContext {
    /** Definición del Idioma para la Aplicación */
    language?: string
};

export default GraphQLContext;