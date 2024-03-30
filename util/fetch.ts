/*
@author LxingA
@project CodeInk
@name Global
@date 05/03/24 03:00PM
@description Implementación del Fetcher para la Conexión a la API Global
*/

/** Fetcher para la Comunicación a la API Global */
const $Fetcher$ = async({
    $uri$,
    $method$ = "GET",
    $cache$ = true,
    $path$ = "/",
    $signal$,
    $header$,
    $query$ = {}
}:{
    /** Ruta Absoluta HTTP del Punto Final (sin /) */
    $uri$?: string,
    /** Definición del Método HTTP */
    $method$?: "GET" | "POST" | "PUT" | "DELETE",
    /** Establecer en Cache la Solicitud del Punto Final HTTP */
    $cache$?: boolean,
    /** Ruta Relativa para la Ruta del Punto Final */
    $path$?: string,
    /** Referencia a una Señal de Interrumpimiento para el Fetcher */
    $signal$?: AbortSignal,
    /** Objeto con las Cabeceras Esenciales para el Punto Final HTTP */
    $header$?: Record<string,any>,
    /** Objeto con los Parámetros para la Solicitud al Punto Final HTTP */
    $query$?: Record<string,any>
}): Promise<{} | string> => {
    let $__path__$ = $path$, $__object__$: RequestInit = {
        method: $method$,
        cache: $cache$ ? "force-cache" : "no-cache",
        signal: $signal$,
        headers: $header$
    }, $__params__$ = [Object["keys"]($query$),Object["values"]($query$)];
    if($method$ == "POST" || $method$ == "PUT") $__object__$["body"] = JSON["stringify"]($query$);
    else $__params__$[0]["forEach"](($0$,$1$) => {
        let $__value__$ = $__params__$[1][$1$];
        if(typeof($__value__$) == "object") $__value__$ = JSON["stringify"]($__value__$);
        else if(typeof($__value__$) == "number") $__value__$ = String($__value__$);
        if($1$ == 0) $__path__$ += `?${$0$}=${$__value__$}`;
        else if($1$ <= ($__params__$[0]["length"] - 1)) $__path__$ += `&${$0$}=${$__value__$}`;
        else $__path__$ += `&${$0$}=${$__value__$}`;
    });const $initial$ = (await fetch(`${$uri$}${$__path__$}`,$__object__$));
    if(!$initial$["ok"] && $initial$["status"] != 200) return `[${$initial$["status"]}] ${$initial$["statusText"]}`;
    else return (await $initial$["json"]());
};

export default $Fetcher$;