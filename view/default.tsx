/*
@author LxingA
@project CodeInk
@name Global
@date 08/03/24 07:40PM
@description Definición de la Plantilla Predeterminada Global de las Aplicaciones
*/
import {useEffect} from 'react';
import $Asset$ from "../util/asset";
import $DOM$ from "../util/dom";

/** Plantilla Predeterminada Global de las Aplicaciones */
const $Default$ = ({$message$,$title$}:{
    /** Definición del Mensaje a Mostrar en el Contexto de la Plantilla */
    $message$: string,
    /** Definición de un Titulo para Mostrar en el Contexto de la Plantilla */
    $title$: string
}) => {
    useEffect(() => {
        $DOM$({$document$:document,$attribute$:{
            id: "ck_template_default_style",
            rel: "stylesheet",
            href: $Asset$("style.css",true),
            type: "text/css"
        }});
        $DOM$({$document$:document,$attribute$:{
            id: "ck_template_default_icon",
            rel: "icon",
            href: $Asset$("favicon.webp",true),
            type: "image/x-icon"
        }});
        document["title"] = `${$title$} - Error Global`;
        return () => {
            document["getElementById"]("ck_template_default_style")?.remove();
            document["getElementById"]("ck_template_default_icon")?.remove();
        }
    },[]);
    return (
        <div className="contentError">
            <div className="ctn">
                <h3>
                    {$title$}
                </h3>
                <p>
                    {$message$}
                </p>
            </div>
        </div>
    )
};

export default $Default$;