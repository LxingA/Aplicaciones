/*
@author LxingA
@project CodeInk
@name Global
@date 29/03/24 08:00PM
@description Objeto con la Instancia Inicializadora del Reducer Inicializador de una Aplicación
*/
import type {Global as GlobalPrototype} from '../types/reducer';
import type {ActionReducerMapBuilder} from '@reduxjs/toolkit';

/** Objeto con la Instancia de la API de un Reducedor de una Aplicación */
const $Builder$ = ($Initial$:any,$native$:boolean) => ($b$:ActionReducerMapBuilder<GlobalPrototype>) => {
    $b$["addCase"]($Initial$["fulfilled"],($s$,$a$) => {
        if(typeof($a$["payload"]) == "string") $s$["initial"] = {ready:false,message:$a$["payload"],error:true};
        else{
            Object["keys"](($a$["payload"] as GlobalPrototype))["forEach"](($key$,$iterator$) => {
                ($s$ as any)[$key$] = (Object["values"]($a$["payload"] as GlobalPrototype))[$iterator$];
            });if(!$native$){
                (window as any)["$ck_asset_globally$"] = `${($a$["payload"] as GlobalPrototype)["endpoint"]["asset"]}|${($a$["payload"] as GlobalPrototype)["version"]}`;
                const $__def__$ = ($a$["payload"] as GlobalPrototype)["option"]["$html$"];
                (Object["keys"]($__def__$))["forEach"](($key$,$iterator$) => {
                    (document["documentElement"]["setAttribute"]($key$,`return ${Object["values"]($__def__$)[$iterator$] ? "true" : "false"}`));
                });(document["documentElement"]["setAttribute"]("version",($a$["payload"] as GlobalPrototype)["version"]));
                (document["documentElement"]["setAttribute"]("data-bs-theme",(($a$["payload"] as GlobalPrototype)["dark"]) ? "dark" : "light"));
            }$s$["initial"] = {ready:true,error:false};
        };
    }),
    $b$["addCase"]($Initial$["pending"],($s$) => {
        $s$["initial"] = {ready:false,message:"Obteniendo la Información del Servicio...",error:false};
    }),
    $b$["addCase"]($Initial$["rejected"],($s$) => {
        $s$["initial"] = {ready:false,message:"Hubo un error grave a obtener la información del servicio",error:true};
    })
};

export default $Builder$;