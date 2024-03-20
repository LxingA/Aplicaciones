/*
@author LxingA
@project CodeInk
@name Global
@date 05/03/24 03:00PM
@description Definición del Prototipo para el Servicio del Proyecto
*/
import type Application from "./application";

/** Definición del Prototipo para los Idiomas del Servicio */
export type Language = Record<string,string>;

/** Definición del Tipo para la Geolocalización del Proyecto */
export type Location = {
    /** Nombre del Estado de la Localización del Proyecto */
    state: string,
    /** Nombre de la Ciudad de la Localización del Proyecto */
    city: string,
    /** Nombre del País de la Localización del Proyecto */
    country: string,
    /** Código Postal de la Localización del Proyecto */
    postal?: number,
    /** Nombre de la Colonia de la Localización del Proyecto */
    colony?: string,
    /** Nombre de la Dirección de la Localización del Proyecto */
    street?: string,
    /** Número Exterior de la Localización del Proyecto */
    exterior?: number
};

/** Definición del Tipo para las Redes Sociales del Proyecto */
export type Social = {
    /** Nombre de la Red Social para Identificarla */
    name: string,
    /** Nombre de la Red Social para Mostrar */
    label: string,
    /** Ruta Absoluta HTTP para el Acceso a la Red Social */
    url: string,
    /** Indica sí la Red Social está Habilitada */
    active: boolean,
    /** Nombre del Icono de la Red Social */
    icon: string
};

/** Definición del Tipo para el Objeto con la Información del Proyecto de un Servicio */
export type Project = {
    /** Nombre del Proyecto Asociada al Servicio */
    name: string,
    /** Contenedor con los Nombres Alternos del Proyecto Asociada al Servicio */
    alternative: string[],
    /** Número de Telefóno del Proyecto Asociada al Servicio */
    telephone: string,
    /** Descripción Acerca del Proyecto Asociada al Servicio */
    description: string,
    /** Correo Electrónico del Proyecto Asociada al Servicio */
    mail: string,
    /** Objeto con la Información de la Geolocalización del Servicio */
    location: Location,
    /** Contenedor con las Redes Sociales del Servicio */
    social: Social[]
};

/** Definición del Tipo para el Objeto con la Información de Analítica de un Servicio */
export type Analytic = {
    /** Ruta Absoluta HTTP del Punto Final de Google Analytics Asociada al Servicio */
    endpoint: string,
    /** Identificador Único del Flujo de Google Analytics Asociada al Servicio */
    identified: string,
    /** Identificador Único de la Medición de Google Analytics Asociada al Servicio */
    key: string
};

/** Definición del Prototipo para los Servicios del Proyecto */
interface Service {
    /** Nombre del Servicio */
    name: string,
    /** Mensaje Descriptivo del Servicio */
    slogan: string,
    /** Descripción más Acerca del Servicio */
    description: string,
    /** Objeto con los Puntos Finales Esenciales para el Servicio */
    endpoint: Record<string,string>,
    /** Versión Actual del Servicio */
    version: string,
    /** Nombre del Identificador del Servicio */
    identified: string,
    /** Objeto con la Información del Proyecto Asociada al Servicio */
    project: Project,
    /** Objeto con la Información de Google Analytics para los Servicios */
    analytic: Analytic,
    /** Objeto con la Información Esencial del Servicio */
    option: Application,
    /** Objeto con la Información General Adicional del Servicio */
    general?: Record<string,any>,
    /** Contenedor con las Palabras Claves para el SEO del Servicio */
    keywords?: string[],
    /** Indicar sí el Estilo de la Aplicación se Renderizará de Forma Local o mediante la CDN */
    localStyle: boolean
}

export default Service;