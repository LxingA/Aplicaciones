/*
@author LxingA
@project CodeInk
@name Global
@date 05/03/24 06:30PM
@description Creador de Elementos HTML para el DOM de la Aplicación
*/

/** Definición de Elementos DOM para las Aplicaciones */
const $DOM$ = ({
    $document$,
    $to$ = "head",
    $attribute$ = {},
    $type$ = "link",
    $content$
}:{
    /** Referencia al Documento DOM del Contexto para la Creación del DOM */
    $document$: Document,
    /** Concatenar el DOM creado al Siguiente Contexto HTML */
    $to$?: "body" | "head",
    /** Objeto con los Parámetros Esenciales para la Creación del DOM */
    $attribute$?: Record<string,any>,
    /** Tipo de Elemento HTML para la Creación del DOM */
    $type$?: keyof HTMLElementTagNameMap,
    /** Definir un Contenido HTML para el DOM */
    $content$?: string
}): void => {
    if(!$document$["getElementById"]($attribute$["id"])){
        const $element$ = $document$["createElement"]($type$);
        const $container$ = [Object["keys"]($attribute$),Object["values"]($attribute$)];
        $container$[0]["forEach"](($,i)=>{($element$ as any)[$]=$container$[1][i]});
        if($content$) $element$["innerHTML"] = $content$;
        $document$[$to$]["appendChild"]($element$);
    }
};

export default $DOM$;