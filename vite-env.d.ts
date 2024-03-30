/// <reference types="vite/client" />
/** NOTA: Para el Ambito de React Native solamente crear las mismas variables pero con el EXPO_PUBLIC_ cómo prefijo */
interface ImportMetaEnv {
    /** Definición del Punto Final Absoluto HTTP para el Acceso a la API Global sin / */
    CkAppEnvironmentAPIEndPointURI: string,
    /** Identificador UUID de la Aplicación Actual para la API */
    CkAppEnvironmentCurrentApplicationID: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}