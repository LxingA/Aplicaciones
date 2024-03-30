/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 18/03/24 11:30PM
@description Definición de los Componentes Esenciales para la Vista de Listado de la Aplicación
*/
import {useState,KeyboardEvent} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useTranslation} from 'react-i18next';
import {useSelector,useDispatch} from 'react-redux';
import {useQuery} from '@apollo/client';
import {$Action$} from '../../../util/reducer';
import type {Root} from '../../../bin/redux';
import type {Category} from '../../../types/service/media';
import type {ApolloQueryResult,OperationVariables} from '@apollo/client';
import type {CSSProperties} from 'react';
import $Loader$ from 'react-loading-skeleton';
import $Asset$ from '../../../util/asset';
import $SprintF$,{$UpperString$} from '../../../util/sprintf';
import $CategoryQuery$ from '../graphql/category';
import $Skeleton$ from 'react-loading-skeleton';

/** Definición del Componente Global para Mostrar el Contenedor de No Encontrado de GraphQL */
export const $ComponentListenerNotFoundContainer$ = () => {
    const {t} = useTranslation();
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <LazyLoadImage effect="blur" className="d-block mx-lg-auto img-fluid" src={$Asset$(`util/global_icon_notfound_anime_cover.webp`)} />
                </div>
                <div className="col-lg-6 text-center">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                        {t("ComponentListenerNotFoundTitleText")}
                    </h1>
                </div>
            </div>
        </div>
    );
};

/** Definición del Componente Global para Mostrar un Error de GraphQL */
export const $ComponentListenerErrorContainer$ = ({$callback$}:{
    /** Referencía a la Función de Refrescar para Recargar el GraphQL */
    $callback$: (variables?:Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>
}) => {
    const {t} = useTranslation();
    return (
        <div className="py-2 text-center">
            <LazyLoadImage width="64" className="d-block mx-auto mb-2" effect="blur" src={$Asset$("util/global_icon_error.webp")}/>
            <h4 className="fw-bold text-body-emphasis mb-3">
                {t("GraphQLErrorUnknownGlobalTitleText")}
            </h4>
            <div className="col-lg-6 mx-auto">
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button className="btn btn-outline-secondary btn-lg px-4" onClick={$event$ => {
                        $event$["preventDefault"]();
                        $callback$();
                    }}>
                        {t("GraphQLErrorUnknownGlobalButtonActionLabel")}
                    </button>
                </div>
            </div>
        </div>
    );
};

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
    const {contextView,search,pagination:{loader}} = useSelector(($current$:Root)=>$current$["media"]);
    const $dispatcher$ = useDispatch();
    const $searchComponent$ = () => {
        const [current,setCurrent] = useState(search);
        const $handler$ = ($event$:KeyboardEvent<HTMLInputElement>) => {
            $event$["preventDefault"]();
            ($event$["code"] == "Enter") && $dispatcher$($Action$["$media$"]["setSearch"]((current == "") ? undefined : current));
        };return (
            <input onChange={$event$ => setCurrent($event$["target"]["value"])} readOnly={loader} disabled={loader} type="search" defaultValue={search} className="form-control" placeholder={t("PageListenerOptionSearchLabelText")} onKeyUp={$handler$}/>
        );
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="pb-3 fst-italic">
                        {search ? $SprintF$(t("PageListenerOptionSearchEnabledContextTextLabel"),{search}) : $SprintF$(t("PageListenerOptionHeaderTitleText"),{context:t(`PageIndexSeeModeMediaBoxContent${$UpperString$(contextView)}Title`)})}
                    </h3>
                </div>
                <div className="col-auto">
                    <$searchComponent$ />
                </div>
            </div>
        </div>
    );
};

/** Componente para Mostrar el Contenedor de Filtro para los Medios */
export const $ComponentListenerCategoryContainer$ = () => {
    const {t,i18n:{language}} = useTranslation();
    const {contextView,filter,pagination:{loader}} = useSelector(($current$:Root)=>$current$["media"]);
    const {loading,error,data,refetch} = useQuery($CategoryQuery$,{context:{language},variables:{context:contextView},initialFetchPolicy:"cache-and-network"}); 
    const $dispatcher$ = useDispatch();
    return (
        <div className="flex-shrink-0 p-3">
            <div className="row d-flex align-items-center pb-3 mb-3 text-decoration-none border-bottom">
                <div className="col">
                    <span className="fs-5 fw-semibold">
                        {t("ComponentListenerFilterContainerTitleText")}
                    </span>
                </div>
                <div className="col text-end">
                    <button disabled={loader || filter["length"] == 0} className="btn btn-outline-secondary" onClick={() => $dispatcher$($Action$["$media$"]["setFilter"]("none"))}>
                        {t("ComponentListenerFilterContainerButtonResetLabelText")}
                    </button>
                </div>
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
            ) : (error ? <$ComponentListenerErrorContainer$ $callback$={refetch}/> : (
                <ul className="list-unstyled ps-0">
                    {data["media_category"] && (data["media_category"] as Category[])["map"](({children,name,identified:category_identified},$iterator$) => (
                        <li className="mb-1" key={$iterator$}>
                            <button data-bs-target={`#container_category_${$iterator$}`} data-bs-toggle="collapse" className="btn btn-toggle d-inline-flex align-items-center rounded border-0">
                                {name}
                            </button>
                            <div className="collapse" id={`container_category_${$iterator$}`}>
                                {children && (
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        {children["map"](({identified,label}) => {
                                            const $enable$: boolean = filter["includes"](`${category_identified}:${identified}`);
                                            return (
                                                <li key={identified}>
                                                    <a onClick={() => !$enable$ ? $dispatcher$($Action$["$media$"]["setFilter"](`${category_identified}:${identified}`)) : undefined} style={{cursor:((loader || $enable$) ? "not-allowed" : "pointer")}} className={`link-body-emphasis d-inline-flex text-decoration-none rounded${$enable$ ? " link-disabled" : undefined}`}>
                                                        {label}
                                                    </a>
                                                </li>
                                            );
                                        })}
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
    const {pagination:{currentPage,total:{elements,pages,current},loader},contextView} = useSelector(($current$:Root)=>$current$["media"]);
    const {t} = useTranslation();
    const $dispatcher$ = useDispatch();
    const $icon$: CSSProperties = {position:"relative",right:"1px",top:"3px"};
    const $context_name$: string[] = t(`ComponentListenerPaginationContext${$UpperString$(contextView)}Title`)["toLowerCase"]()["split"]("|");
    return (
        <div className="row text-center mt-5 d-flex">
            <div className="col">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button onClick={_ => $dispatcher$($Action$["$media$"]["mutatePagination"]({currentPage:1} as any))} disabled={loader || currentPage == 1} className="page-link btn btn-outline-secondary">
                            <span style={$icon$} className="material-icons-outlined">
                                keyboard_double_arrow_left
                            </span>
                        </button>
                    </li>
                    <li className="page-item">
                        <button onClick={_ => $dispatcher$($Action$["$media$"]["mutatePagination"]({currentPage:(currentPage - 1)} as any))} disabled={loader || currentPage <= 1} className="page-link btn btn-outline-secondary">
                            <span style={$icon$} className="material-icons-outlined">
                                chevron_left
                            </span>
                        </button>
                    </li>
                    <li className="page-item">
                        <button onClick={_ => $dispatcher$($Action$["$media$"]["mutatePagination"]({currentPage:(currentPage + 1)} as any))} disabled={loader || currentPage >= (pages == 0 ? (pages + 1) : pages)} className="page-link btn btn-outline-secondary">
                            <span style={$icon$} className="material-icons-outlined">
                                chevron_right
                            </span>
                        </button>
                    </li>
                    <li className="page-item">
                        <button onClick={_ => $dispatcher$($Action$["$media$"]["mutatePagination"]({currentPage:pages} as any))} disabled={loader || currentPage == (pages == 0 ? (pages + 1) : pages)} className="page-link btn btn-outline-secondary">
                            <span style={$icon$} className="material-icons-outlined">
                                keyboard_double_arrow_right
                            </span>
                        </button>
                    </li>
                </ul>
                <p>
                    {loader ? <$Skeleton$ count={1}/> : $SprintF$(t("ComponentListenerPaginationTextLabelText"),{
                        total_on_view: (currentPage == pages) ? elements : (current * currentPage),
                        total_elements: elements,
                        context_name: (current <= 1) ? $context_name$[1] : $context_name$[0]
                    })}
                </p>
            </div>
        </div>
    );
};