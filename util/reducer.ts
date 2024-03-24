/*
@author LxingA
@project CodeInk
@name Global
@date 08/03/24 06:00PM
@description Definición del Reducer Global para las APlicaciones
*/
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import $Fetcher$ from './fetch';
import type {Global as GlobalPrototype} from '../types/reducer';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {MediaType,MediaObject} from '../types/service/media';
import type Pagination from '../types/pagination';

/** Definición del Handler para la Petición a la API Global */
export const $Initial$ = (createAsyncThunk("api/fetch",(async () => (await $Fetcher$({
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
    initialState: ({
        name: "Aplicación Predeterminada",
        language: navigator["language"]["substring"](0,2),
        slogan: "Una Simple Página Predeterminada del Proyecto",
        description: "Está es una Aplicación Predeterminada del Proyecto tras no ser Obtenida mediante la API Global",
        version: "1.0.0",
        identified: "ckapp-default",
        project: {
            name: "Proyecto Predeterminado",
            telephone: "+528100000000",
            description: "Esto es un Proyecto de Ejemplo Asociada a la Aplicación Predeterminada",
            mail: "noreply@example.com"
        },
        dark: false,
        initial: {
            ready: false,
            error: false
        }
    } as GlobalPrototype),
    reducers: {
        /** Cambiar el Tema Global de la Aplicación */
        $dark$: ($s$,{payload}:PayloadAction<boolean>) => {
            document["documentElement"]["setAttribute"]("data-bs-theme",(payload ? "dark" : "light"));
            $s$["dark"] = payload;
        }
    },
    extraReducers: $b$ => {
        $b$["addCase"]($Initial$["fulfilled"],($s$,$a$) => {
            if(typeof($a$["payload"]) == "string") $s$["initial"] = {ready:false,message:$a$["payload"],error:true};
            else{
                Object["keys"](($a$["payload"] as GlobalPrototype))["forEach"](($key$,$iterator$) => {
                    ($s$ as any)[$key$] = (Object["values"]($a$["payload"] as GlobalPrototype))[$iterator$];
                });(window as any)["$ck_asset_globally$"] = `${($a$["payload"] as GlobalPrototype)["endpoint"]["asset"]}|${($a$["payload"] as GlobalPrototype)["version"]}`;
                const $__def__$ = ($a$["payload"] as GlobalPrototype)["option"]["$html$"];
                (Object["keys"]($__def__$))["forEach"](($key$,$iterator$) => {
                    (document["documentElement"]["setAttribute"]($key$,`return ${Object["values"]($__def__$)[$iterator$] ? "true" : "false"}`));
                });(document["documentElement"]["setAttribute"]("version",($a$["payload"] as GlobalPrototype)["version"]));
                (document["documentElement"]["setAttribute"]("data-bs-theme",(($a$["payload"] as GlobalPrototype)["dark"]) ? "dark" : "light"));
                $s$["initial"] = {ready:true,error:false};
            };
        }),
        $b$["addCase"]($Initial$["pending"],($s$) => {
            $s$["initial"] = {ready:false,message:"Obteniendo la Información del Servicio...",error:false};
        }),
        $b$["addCase"]($Initial$["rejected"],($s$) => {
            $s$["initial"] = {ready:false,message:"Hubo un error grave a obtener la información del servicio",error:true};
        })
    }
}));

/** Reducedor para la Aplicación de los Medios del Proyecto */
export const $Media$ = (createSlice({
    name: "media",
    initialState: ({
        contextView: "unknown",
        pagination: {
            perPage: 4,
            currentPage: 1,
            total: 0,
            loader: true
        },
        filter: []
    } as MediaObject),
    reducers: {
        /** Establecer el Tipo de Contexto de la Multimedia en la Aplicación */
        setContext: ($current$,{payload}:PayloadAction<MediaType>) => {
            $current$["contextView"] = payload;
        },
        /** Mutar la Paginación del Contexto Actual para la Vista de Lista de la Aplicación */
        mutatePagination: ($current$,{payload}:PayloadAction<Pagination>) => {
            $current$["pagination"] = {...$current$["pagination"],...payload};
        },
        /** Añadir un Nuevo Filtro en el Contexto de un Medio para el Filtro */
        setFilter: ($current$,{payload}:PayloadAction<string>) => {
            const $__clone__$: string[] = payload["split"](":");
            const $__filter__$: string[] = (payload == "none" ? [] : $current$["filter"]);
            if(payload != "none") if($__filter__$["length"] == 0) $__filter__$["push"](payload); else for(let $y$: number = 0; $y$ <= ($current$["filter"]["length"] - 1); $y$++){
                if($current$["filter"][$y$]["startsWith"]($__clone__$[0])){
                    delete $__filter__$[$y$];
                    $__filter__$[$y$] = payload;
                }else if($current$["filter"][$y$] != payload) $__filter__$["push"](payload);
            }$current$["pagination"] = {...$current$["pagination"],loader:true};
            $current$["filter"] = $__filter__$;
        },
        /** Definir en Contexto de Búsqueda al Ambito de la Aplicación */
        setSearch: ($current$,{payload}:PayloadAction<string | undefined>) => {
            $current$["search"] = payload;
        }
    }
}));

/** Contenedor con Todas las Acciones de los Reducers */
export const $Action$ = {
    /** Contenedor con las Acciones del Reducedor Global */
    $global$: $Global$["actions"],
    /** Contenedor con las Acciones del Reducedor Media */
    $media$: $Media$["actions"]
};