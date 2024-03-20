/*
@author LxingA
@project CodeInk Apps
@name SocASF Anime [anime]
@date 18/03/24 11:30PM
@description Definición de los Componentes Esenciales para la Vista de Listado de la Aplicación
*/
import {Fragment} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import type {Root} from '../../../bin/redux';
import type {Category} from '../../../types/service/media';
import $Loader$ from 'react-loading-skeleton';
import $Asset$ from '../../../util/asset';
import $SprintF$,{$UpperString$} from '../../../util/sprintf';
import $CategoryQuery$ from '../graphql/category';

/** Componente Importante para Mostrar el Cuadro de Bienvenida en la Vista de Listado de los Medios */
export const $ComponentListenerHeaderBox$ = ({title,description,context}:{
    /** Mostrar un Titulo en la Cabecera del Componente */
    title: string,
    /** Definir una Descripción Respecto al Medio para la Cabecera del Componente */
    description?: string,
    /** Contexto Actual de la Aplicación en el Medio */
    context: string
}) => {
    return (
        <div className="px-4 my-3 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">
                {title}
            </h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4" dangerouslySetInnerHTML={{__html:description!}}/>
            </div>
            <div className="overflow-hidden" style={{maxHeight:"60vh"}}>
                <div className="container px-5">
                    <LazyLoadImage alt={title} className="d-block mx-lg-auto img-fluid" effect="blur" src={$Asset$(`background/listener_${context}_component_header_cover.webp`)}/>
                </div>
            </div>
        </div>
    );
};

/** Complemento Esencial para Mostrar el Formulario de Búsqueda y Título en el Listado de los Medios */
export const $AddonListenerOptionsContainer$ = () => {
    const {t} = useTranslation();
    const {contextView} = useSelector(($current$:Root)=>$current$["media"]);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="pb-3 fst-italic">
                        {$SprintF$(t("PageListenerOptionHeaderTitleText"),{context:t(`PageIndexSeeModeMediaBoxContent${$UpperString$(contextView)}Title`)})}
                    </h3>
                </div>
                <div className="col-auto">
                    <input placeholder="Búsqueda" type="search" className="form-control"/>
                </div>
            </div>
        </div>
    );
};

/** Componente para Mostrar el Contenedor de Filtro para los Medios */
export const $ComponentListenerCategoryContainer$ = () => {
    const {t,i18n:{language}} = useTranslation();
    const {contextView} = useSelector(($current$:Root)=>$current$["media"]);
    const {loading,error,data,refetch} = useQuery($CategoryQuery$,{context:{language},variables:{context:contextView},initialFetchPolicy:"cache-and-network"});
    return (
        <div className="flex-shrink-0 p-3">
            <div className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                <span className="fs-5 fw-semibold">
                    {t("ComponentListenerFilterContainerTitleText")}
                </span>
            </div>
            {loading ? (
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <$Loader$ count={1}/>
                        <$Loader$ count={4} style={{width:"160px",height:"12px"}}/>
                    </li>
                    <li className="mb-1">
                        <$Loader$ count={1}/>
                        <$Loader$ count={4} style={{width:"160px",height:"12px"}}/>
                    </li>
                </ul>
            ) : (error ? (
                <div className="py-2 text-center">
                    <LazyLoadImage width="64" className="d-block mx-auto mb-2" effect="blur" src={$Asset$("util/global_icon_error.webp")}/>
                    <h4 className="fw-bold text-body-emphasis mb-3">
                        {t("GraphQLErrorUnknownGlobalTitleText")}
                    </h4>
                    <div className="col-lg-6 mx-auto">
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button className="btn btn-outline-secondary btn-lg px-4" onClick={$event$ => {
                                $event$["preventDefault"]();
                                refetch();
                            }}>
                                {t("GraphQLErrorUnknownGlobalButtonActionLabel")}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <ul className="list-unstyled ps-0">
                    {data["media_category"] && (data["media_category"] as Category[])["map"](({children,name},$iterator$) => (
                        <li className="mb-1" key={$iterator$}>
                            <button data-bs-target={`#container_category_${$iterator$}`} data-bs-toggle="collapse" className="btn btn-toggle d-inline-flex align-items-center rounded border-0">
                                {name}
                            </button>
                            <div className="collapse" id={`container_category_${$iterator$}`}>
                                {children && (
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        {children["map"](({identified,label}) => (
                                            <li key={identified}>
                                                <a style={{cursor:"pointer"}} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                    {label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

/** Componente para Mostrar el Paginador para el Listado de los Medios */
export const $ComponentListenerPaginatorContainer$ = () => {
    return (
        <p>Páginador</p>
    );
};