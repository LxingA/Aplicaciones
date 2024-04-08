/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 06/03/24 11:30PM
@description Componentes para la Definición de Contenedores de Cajas para la Aplicación
*/
import {Fragment,MouseEventHandler} from 'react';
import {useTranslation} from 'react-i18next';
import {Link,useLocation} from 'react-router-dom';
import type {Location} from '../../../types/service';
import $Asset$ from '../../../util/asset';
import $SprintF$ from '../../../util/sprintf';

/** Definición del Tipo para los Productos del Contenedor */
type Product = {
    /** Nombre del Producto */
    name: string,
    /** Precio del Producto */
    price?: number,
    /** Objeto para Definir una Plantilla de un Mensaje Personalizado para el Producto */
    template?: {
        /** Definir el Prototipo para Mostrar la Plantilla */
        format: string,
        /** Definir el Tipo de Articulo a Mostrar */
        type: string
    }
};

/** Componente para Mostrar el Contenedor de los Productos con sus Precios */
export const $Products$ = ({$item$}:{
    /** Contenedor con los Productos a Mostrar */
    $item$: {
        /** Titulo a Mostrar en el Contenedor */
        title: string,
        /** Contenedor con los Productos a Mostrar en el Contenedor */
        product: Product[] | Record<string,Product[]>,
        /** Mostrar un Mensaje Importante en el Contenedor */
        message?: string,
        /** Ruta Absoluta HTTP de la Imágen a Mostrar en el Contenedor como Cabecera */
        image?: string
    }[],
}) => {
    const {t} = useTranslation("inkexpress");
    const $Container_Product$ = ({name,price,template}:Product) => {
        return (
            <div className="articulo">
                <strong>
                    {name}
                </strong>
                <p>
                    {price ? (template ? $SprintF$(t(template["format"]),{price:price,type:template["type"]}) : `$${price}`) : t("PricePageListingProductsNotAvailable")}
                </p>
            </div>
        );
    };
    return (
        <div className="listaprec">
            {$item$["map"](({title,product,message,image},unique) => (
                <div className="boxp" key={unique}>
                    <h3>
                        <strong>
                            {title["toUpperCase"]()}
                        </strong>
                    </h3>
                    {image && (
                        <img src={$Asset$(`box/${image}.webp`)} style={{width:"100%",pointerEvents:"none"}}/>
                    )}
                    <div className="lista">
                        {(product instanceof Array) ? product["map"](($,$$) => (
                            <$Container_Product$ {...$} key={$$}/>
                        )) : Object["values"](product)["map"](($,$$) => (
                            <Fragment key={$$}>
                                <h2>
                                    *{Object["keys"](product)[$$]}
                                </h2>
                                {$["map"](($,$$) => (
                                    <$Container_Product$ {...$} key={$$}/>
                                ))}
                                {($$ < (Object["keys"](product)["length"] - 1)) && (
                                    <br />
                                )}
                            </Fragment>
                        ))}
                        {message && (
                            <p className="import">
                                *{message}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

/** Definición del Contenedor para Mostrar Advertencias en la Aplicación */
export const $Message$ = ({$title$,$description$,$button$}:{
    /** Titulo a Mostrar en el Contenedor */
    $title$: string,
    /** Descripción a Mostrar en el Contenedor */
    $description$: string,
    /** Objeto para Definir el Botón de Acción del Contenedor */
    $button$: {
        /** Definir el Texto en el Botón */
        $label$: string,
        /** Definir el Tipo de Salida del Botón */
        $target$?: string,
        /** Establecer el Enlace A en Contexto de React Router */
        $local$: boolean,
        /** Ruta Absoluta HTTP del Punto en Dónde Dirigir el Botón */
        $url$?: string,
        /** Definir un Tipo de Acción Personalizado para el Botón */
        $callback$?: MouseEventHandler<HTMLAnchorElement>
    }
}) => {
    const {search} = useLocation();
    return (
        <div className="sliderminibox question">
            <div className="maintitle">
                <h3>
                    {$title$}
                </h3>
            </div>
            <div className="context">
                <p>
                    {$description$}
                </p>
            </div>
            {$button$["$local$"] ? (
                <Link to={{pathname:$button$["$url$"],search}} className="line">
                    {$button$["$label$"]}
                </Link>
            ) : (
                <a className="line" onClick={$button$["$callback$"] ? $button$["$callback$"] : () => window["open"]($button$["$url$"],($button$["$target$"] ?? "_blank"))} style={{cursor:"pointer"}}>
                    {$button$["$label$"]}
                </a>
            )}
        </div>
    );
};

/** Prototipo para Definir el Listado de los Servicios de Envíos */
type $Listing$ = {
    /** Nombre del Servicio */
    $name$: string,
    /** Precio Unitario del Servicio */
    $price$?: number
};

/** Contenedor para Mostrar los Precios de los Envíos de la Aplicación */
export const $Pricing$ = ({$location$,$services$}:{
    /** Objeto con la Información de Ubicación del Servicio */
    $location$: Location,
    /** Contenedor con los Servicios de Envío de la Aplicación */
    $services$: $Listing$[]
}) => {
    const {t} = useTranslation("inkexpress");
    const $Listing$ = ({$item$}:{
        /** Contenedor con la Lista de los Servicios de Envío */
        $item$: $Listing$[]
    }) => {
        return (
            <ul>
                {$item$["map"](({$name$,$price$},$unique$) => (
                    <li key={$unique$}><br/>
                        <span>
                            {$name$} {$price$ ? `$${$price$}` : t("PolicyBoxComponentListingIsTypeFreeText")}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div style={{backgroundColor:"#e5e5db",padding:"25px",textAlign:"left",marginBottom:"15px"}}>
            {t("PolicyBoxComponentListingHeaderTitle")}<br/><br/>
            {$SprintF$(t("PolicyBoxComponentListingHeaderDescription"),{
                city: $location$["city"],
                state: $location$["state"],
                price: 20
            })}
            {<$Listing$ $item$={$services$}/>}
        </div>
    );
};

/** Contenedor para Mostrar los Horarios Laborales de la Aplicación */
export const $Schedule$ = ({$ranges$}:{
    /** Contenedor con los Rangos de los Horarios desde la Base de Datos */
    $ranges$: {
        /** Rango de Días Laborales (:~:) */
        dayRange: string,
        /** Rango de Horas Laborales (:~:) */
        hourRange: string
    }[]
}) => {
    const {t} = useTranslation("inkexpress");
    const $Day$: string[] = (t("GlobalTimeContextDaysLabel"))["split"](":");
    const $h$ = ($f$:string,$c$:string[]) => {
        let $__object__$: Record<string,null> = {};
        ($f$["split"]("~"))["forEach"]($=>{$__object__$[$]=null});
        (Object["keys"]($__object__$)["forEach"]($=>$c$["push"]($)));
    };return $ranges$["map"](({dayRange,hourRange},iterator) => {
        const $days$: string[] = [];
        const $hours$: string[] = [];
        $h$(dayRange,$days$);
        $h$(hourRange,$hours$);
        return (
            <Fragment key={iterator}>
                <strong>
                    {($days$["length"] >= 2) ? $SprintF$(t("GlobalTimePeriodDayStructureText"),{startDay:$Day$[Number($days$[0])],endDay:$Day$[Number($days$[1])]}) : $Day$[Number($days$[0])]}
                </strong>
                <p>
                    {($hours$["length"] >= 2) ? $SprintF$(t("GlobalTimePeriodTimmingStructureText"),{startHour:$hours$[0],endHour:$hours$[1]}) : t("PricePageListingProductsNotAvailable")}
                </p>
            </Fragment>
        );
    });
};