/*
@author LxingA
@project CodeInk
@name Global
@date 08/03/24 07:20PM
@description Integración de React Redux como Manejador de Estados para las Aplicaciones
*/
import {configureStore,combineReducers} from '@reduxjs/toolkit';
import {$Global$} from '../util/reducer';

/** Definición del Almacenamiento de Estados Global para las Aplicaciones */
const $Redux$ = (configureStore({
    reducer: combineReducers({
        global: $Global$["reducer"]
    }),
    devTools: false
}));

/** Definición del Prototipo de los Reducedores de la Aplicación */
export type Root = ReturnType<typeof $Redux$["getState"]>;

export default $Redux$;