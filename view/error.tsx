/*
@author LxingA
@project CodeInk
@name Global
@date 09/03/24 12:00AM
@description Definición del Handler para los Errores Globales de los Rutadores de una Aplicación
*/
import {useRouteError,isRouteErrorResponse} from 'react-router-dom';
import $Default$ from './default';

/** Definición del Componente para el Renderizado de los Errores del Rutador de las Aplicaciones */
const $Error$ = () => {
    const $context$ = useRouteError();
    let {$M$,$T$}:{$M$:string,$T$:string} = {$M$:"Hubo un error desconocido a procesar lo solicitado",$T$:"Error Desconocido"};
    if(isRouteErrorResponse($context$))switch($context$["status"]){
        case 400:
            $M$ = "Lo sentimos, hubo un error a procesar lo solicitado debido a su solicitud con una sintaxis inválida";
            $T$ = "Solicitud Inválida";
        break;
        case 401:
            $M$ = "Lo sentimos, no tiene autorización a acceder a dicho recurso debido a falta de autenticidad de su parte";
            $T$ = "No Autenticado";
        break;
        case 403:
            $M$ = "Lo sentimos, no estás autorizado para acceder a dicho recurso";
            $T$ = "No Autorizado";
        break;
        case 404:
            $M$ = "Lo sentimos, el recurso de la cuál está intentando accesar, no está disponible en el servidor";
            $T$ = "No Encontrado";
        break;
        case 500:
            $M$ = "Lo seintmos, hubo un error grave al lado del servidor al procesar su solicitud, intentelo más tarde nuevamente";
            $T$ = "Error Interno";
        break;
        case 502:
            $M$ = "Lo sentimos, hubo un error de comunicación con un microservicio al lado del servidor al procesar su solicitud, intentelo nuevamente más tarde";
            $T$ = "Error en el Micro-Servicio";
        break;
        case 503:
            $M$ = "Lo sentimos, el servidor no puede procesar su solicitud por el momento, debido a demandas de al lado del servidor, intentelo de nuevo más tarde";
            $T$ = "No Disponible";
        break;
        default:
            $M$ = $context$["statusText"];
            $T$ = "Respuesta del Servidor";
        break;
    }return <$Default$ $title$={$T$} $message$={$M$}/>;
};

export default $Error$;