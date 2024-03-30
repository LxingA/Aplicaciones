/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 25/03/24 02:30PM
@description Plantilla para Mostrar la Vista del Contenido de un Medio
*/
import {Fragment} from 'react';
import type {SEO} from '../../../util/seo';
import $SEOComponent$ from '../../../util/seo';
import $Template$ from './default';

/** Plantilla para Mostrar el Contenido en General de un Medio */
export default function View({children,seo}:{
    /** Referencia al Hijo DOM de la Plantilla */
    children: JSX.Element,
    /** Objeto con la Información Respecto al SEO de la Aplicación */
    seo: SEO
}){
    return (
        <$Template$>
            <Fragment>
                <$SEOComponent$ {...seo}/>
                {children}
            </Fragment>
        </$Template$>
    );
};