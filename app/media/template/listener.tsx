/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 18/03/24 10:30PM
@description Plantilla para Mostrar la Vista de Listado de los Medios
*/
import {useEffect,Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {$Action$} from '../../../util/reducer';
import {useTranslation} from 'react-i18next';
import {$ComponentListenerHeaderBox$,$ComponentListenerCategoryContainer$,$ComponentListenerPaginatorContainer$} from '../component/listener.web';
import {$AddonListenerOptionsContainer$} from '../component/listener.web';
import {$UpperString$} from '../../../util/sprintf';
import type {SEO} from '../../../util/seo';
import type {MediaType} from '../../../types/service/media';
import $SEOComponent$ from '../../../util/seo';
import $Template$ from './default';

/** Definición de la Plantilla para Mostrar los Medios en Listado */
export default function Listener({children,seo,context}:{
    /** Referencia al Hijo DOM para el Listado de los Medios */
    children: JSX.Element,
    /** Objeto con la Información Esencial para la Definición del SEO en el Servicio */
    seo: SEO,
    /** Definición del Contexto en la Aplicación */
    context: MediaType
}){
    const {t} = useTranslation();
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher($Action$["$media$"]["setContext"](context));
        return () => {
            dispatcher($Action$["$media$"]["setContext"]("unknown"));
        }
    },[]);
    return (
        <$Template$>
            <Fragment>
                <$SEOComponent$ {...seo}/>
                <$ComponentListenerHeaderBox$ {...{context}} title={t(`PageIndexSeeModeMediaBoxContent${$UpperString$(context)}Title`)} description={seo["$description$"]}/>
                <div className="row g-5">
                    <div className="col-md-3">
                        <div className="position-sticky">
                            <$ComponentListenerCategoryContainer$ />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <$AddonListenerOptionsContainer$ />
                        {children}
                        <$ComponentListenerPaginatorContainer$ />
                    </div>
                </div>
            </Fragment>
        </$Template$>
    );
};