/*
@author LxingA
@project CodeInk
@name Global
@date 08/03/24 06:00PM
@description Definición del Prototipo para el Reducedor Global de la Aplicación
*/
import type Service from "./service";

/** Definición del Prototipo para el Reducedor Global para las Aplicaciones del Proyecto */
export interface Global extends Service {
    /** Definición de los Idiomas del Servicio */
    language: "es" | "en",
    /** Definir el Objeto para la Inicialización del Servicio */
    initial: {
        /** Estatus Actual de la Inicialización del Servicio */
        ready: boolean,
        /** Mensaje en Caso de Presentar un Problema al Inicializar el Servicio */
        message?: string,
        /** Indica sí la Hubo un Error a Inicializar la Aplicación */
        error: boolean
    }
}