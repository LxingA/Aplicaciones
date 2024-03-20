/*
@author LxingA
@project CodeInk
@name Global
@date 05/03/24 09:20PM
@description Definición del Punto Final para el Accesos de los Recursos de la Aplicación
*/

/**
 * Definición del Punto Final para el Acceso a los Recursos de la Aplicación
 * @param $file$ Nombre del Recurso a Obtener
 * @param $local$ Establecer el Contexto Local en el Rutador
 * @returns Retorna en Formato HTTP Absoluto el Punto Final con el Recurso
 */
const $Asset$ = ($file$:string,$local$:boolean=false): string => {
    const $__initial__$: string[] = $local$ ? "|0.0.0"["split"]("|") : (((window as any)["$ck_asset_globally$"] ?? "|0.0.0") as string)["split"]("|");
    return `${$__initial__$[0]}/${$file$}?v=${$__initial__$[1]}`;
};

export default $Asset$;