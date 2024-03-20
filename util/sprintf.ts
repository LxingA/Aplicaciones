/*
@author LxingA
@project CodeInk
@name Global
@date 06/03/24 09:45PM
@description Definición de una Imitación de la Función "sprintf()" de PHP para la Aplicación
*/

/** Definir el Primer Carácter en Mayúscula */
export const $UpperString$ = ($value$:string): string => `${$value$[0]["toUpperCase"]()}${$value$["substring"](1)}`;

/** Definición de una Función similar a SprintF de PHP para las Aplicaciones */
const $SprintF$ = ($text$: string, $args$: Record<string,any> = {}): string => {
    const $__initial__$ = [Object["keys"]($args$),Object["values"]($args$)];
    for(let $x = 0; $x <= ($__initial__$[0]["length"] - 1); $x++) $text$ = $text$["replace"]((new RegExp("\{"+$__initial__$[0][$x]+"\}","gi")),$__initial__$[1][$x]);
    return $text$;
};

export default $SprintF$;