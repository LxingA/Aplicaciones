/*
@author LxingA
@project CodeInk
@name Global
@date 05/03/24 09:20PM
@description Definición del Punto Final para el Accesos de los Recursos de la Aplicación
*/
import $Crypto$ from 'crypto-js';
import {$Storage$} from './reducer';

/**
 * Definición del Punto Final para el Acceso a los Recursos de la Aplicación
 * @param $file$ Nombre del Recurso a Obtener
 * @param $local$ Establecer el Contexto Local en el Rutador
 * @returns Retorna en Formato HTTP Absoluto el Punto Final con el Recurso
 */
const $Asset$ = ($file$:string,$local$:boolean=false): string => {
    const local = ($Storage$["get"]("ckapp-cdn-data"));
    const hash = ($Crypto$["MD5"]($file$))["toString"]($Crypto$["enc"]["Hex"]);
    let $generate_token$: string = "";
    if(local["token"]){
        const $access_token$: string = local["token"]["split"]("-");
        const $structure_hash$: string = `${$access_token$[0]["replace"](/\_/g,"-")}/${$file$}${$access_token$[1]}`;
        if(hash in $Storage$["get"]("ckapp-cdn-token")) $generate_token$ = $Storage$["get"]("ckapp-cdn-token")[hash];
        else{
            let $__objected__$ = $Storage$["get"]("ckapp-cdn-token");
            const $hashed$: string = ($Crypto$["algo"]["SHA256"]["create"]()["update"]($structure_hash$)["finalize"]())["toString"]($Crypto$["enc"]["Base64"])["replace"](/\n/g,"")["replace"](/\+/g,"-")["replace"](/\//g,"_")["replace"](/\=/g,"");
            $__objected__$[hash] = $hashed$;
            $Storage$["delete"]("ckapp-cdn-token");
            $Storage$["set"]("ckapp-cdn-token",$__objected__$);
            $generate_token$ = $hashed$;
        }return `${local["endpoint"]}/${$file$}?token=${$generate_token$}&expires=${$access_token$[1]}`;
    }else return $local$ ? `/${$file$}?v=${local["version"]}` : `${local["endpoint"]}/${$file$}?v=${local["version"]}`;
};

export default $Asset$;