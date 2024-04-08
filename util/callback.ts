/*
@author LxingA
@project CodeInk
@name Global
@date 31/03/24 02:30AM
@description Definición de los Callback para los Reducedores de las Aplicaciones
*/
import type {Global} from '../types/reducer';

/** Objeto con los Estados Iniciales para los Reducedores de las Aplicaciones */
export const $InitialState$ = {
    global: ({
        name: "Aplicación Predeterminada",
        slogan: "Una Simple Página Predeterminada del Proyecto",
        language: "es",
        description: "Está es una Aplicación Predeterminada del Proyecto tras no ser Obtenida mediante la API Global",
        version: "1.0.0",
        identified: "ckapp-default",
        project: {
            name: "Proyecto Predeterminado",
            telephone: "+528100000000",
            description: "Esto es un Proyecto de Ejemplo Asociada a la Aplicación Predeterminada",
            mail: "noreply@example.com"
        },
        initial: {
            ready: false,
            error: false
        }
    } as Global)
};

/** Objeto con los Callback de los Reducedores de las Aplicaciones */
const $CallBack$ = {
    /** Reducedor Global */
    global: {}
};

export default $CallBack$;