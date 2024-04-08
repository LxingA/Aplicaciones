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
const $Builder$ = ($Initial$:any,$native$:boolean,$storage$:Map<string,any>) => ($b$:ActionReducerMapBuilder<GlobalPrototype>) => {
    $b$["addCase"]($Initial$["fulfilled"],($s$,$a$) => {
        if(typeof($a$["payload"]) == "string") $s$["initial"] = {ready:false,message:$a$["payload"],error:true};
        else{
            Object["keys"](($a$["payload"] as GlobalPrototype))["forEach"](($key$,$iterator$) => {
                ($s$ as any)[$key$] = (Object["values"]($a$["payload"] as GlobalPrototype))[$iterator$];
            });if(!$native$){
                const $__def__$ = ($a$["payload"] as GlobalPrototype)["option"]["$html$"];
                $s$["option"]["theme"] = ($a$["payload"])["option"]["dark"] ? "dark" : "light";
                (document["documentElement"]["setAttribute"]("version",($a$["payload"] as GlobalPrototype)["version"]));
                (Object["keys"]($__def__$))["forEach"](($key$,$iterator$) => {
                    (document["documentElement"]["setAttribute"]($key$,`return ${Object["values"]($__def__$)[$iterator$] ? "true" : "false"}`));
                });
            }$storage$["set"]("ckapp-cdn-data",{
                endpoint: $a$["payload"]["endpoint"]["asset"],
                token: $a$["payload"]["token"],
                version: $a$["payload"]["version"]
            });$storage$["set"]("ckapp-cdn-token",{});
            $s$["initial"] = {ready:true,error:false};
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