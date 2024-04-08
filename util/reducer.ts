/*
@author LxingA
@project CodeInk
@name Global
@date 08/03/24 06:00PM
@description Definición del Reducer Global para las APlicaciones
*/
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import $Builder$ from './initial';
import $Fetcher$ from './fetch';
import $CallBack$,{$InitialState$} from './callback';

/** Referencia al Almacenamiento Local para el Acceso a las Aplicaciones Web */
export const $Storage$ = (new Map<string,any>());

/** Definición del Handler para la Petición a la API Global */
export const $Initial$ = (createAsyncThunk("api/fetch",(async () => (await $Fetcher$({
    $uri$: import.meta.env.CkAppEnvironmentAPIEndPointURI,
    $method$: "GET",
    $cache$: true,
    $path$: "/v1/global",
    $header$: {
        "X-CKeyP-H": import.meta.env.CkAppEnvironmentCurrentApplicationID,
        "X-CLangP-H": navigator["language"]["substring"](0,2)
    },
    $query$: {
        context: "service"
    }
})))));

/** Reducedor Global para las Aplicaciones del Proyecto */
export const $Global$ = (createSlice({
    name: "global",
    initialState: $InitialState$["global"],
    reducers: $CallBack$["global"],
    extraReducers: $Builder$($Initial$,false,$Storage$)
}));

/** Contenedor con Todas las Acciones de los Reducers */
export const $Action$ = {
    /** Contenedor con las Acciones del Reducedor Global */
    $global$: $Global$["actions"]
};