/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 18/03/24 11:00PM
@description Página para Mostrar el Listado de los Medios de la Aplicación
*/
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/client';
import {$Star_Icon_Component$} from './index';
import {$ComponentListenerErrorContainer$,$ComponentListenerNotFoundContainer$} from '../component/listener.web';
import {$Action$} from '../../../util/reducer';
import type {Root} from '../../../bin/redux';
import type {Media as MediaPrototype,MediaType} from '../../../types/service/media';
import $Asset$ from '../../../util/asset';
import $Listener$ from "../template/listener";
import $SprintF$,{$UpperString$} from '../../../util/sprintf';
import $GraphQLMedia$ from '../graphql/media';
import $Skeleton$,{SkeletonTheme} from 'react-loading-skeleton';

/** Definición del Componente para Mostrar el Contenedor del Medio Actual */
const $ComponentMediaCardContainer$ = ({name,description,media,meta,rate}:MediaPrototype): JSX.Element => {
    const $rate_current_element$: JSX.Element[] = [];
    for(let $c = 0; $c <= ((rate ?? 1) - 1); $c++) $rate_current_element$["push"](<$Star_Icon_Component$ key={$c}/>);
    return (
        <div className="col mt-3">
            <div style={{height:"600px",backgroundImage:`url(${media["cover"] ? $Asset$(media["cover"]["substring"](1)) : ""})`}} className="card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div style={{background:"#231f1f8f"}} className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-8 lh-1 fw-bold">
                        {name}
                    </h3>
                    <div className="mb-3">
                        {$rate_current_element$}
                    </div>
                    <p className="lh-2 fw-bold">
                        {`${description?.substring(0,200)}...`}
                    </p>
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">

                        </li>
                        <li className="d-flex align-items-center me-3">
                            <span className="material-icons-outlined" style={{position:"relative",right:"3px"}}>
                                apartment
                            </span>
                            <small>
                                {meta!["filter"](({id}) => (id == "cWQQReUx"))[0]["item"][0]["label"]}
                            </small>
                        </li>
                        <li className="d-flex align-items-center">
                            <span className="material-icons-outlined" style={{position:"relative",right:"3px"}}>
                                calendar_month
                            </span>
                            <small>
                                {meta!["filter"](({id}) => (id == "eIcFYLZZ"))[0]["item"][0]["label"]}
                            </small>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

/** Definición de la Página para Instanciar la Visualización de los Medios */
export default function Listener({context}:{
    /** Definición del Contexto para el Listador */
    context: MediaType
}){
    const {t,i18n:{language}} = useTranslation();
    const {project} = useSelector(($current$:Root)=>$current$["global"]);
    const {pagination:{perPage,currentPage},filter,search} = useSelector(($current$:Root)=>$current$["media"]);
    const {data,loading,error,refetch} = useQuery($GraphQLMedia$,{context:{language},initialFetchPolicy:"no-cache",variables:{search,context,paginator:{perPage,currentPage},filter:(filter["length"] == 0 ? undefined : filter)}});
    const $define_container_default_loader$: JSX.Element[] = [];
    const $dispatcher$ = useDispatch();
    useEffect(() => {
        (data && data["media_content"]) && $dispatcher$($Action$["$media$"]["mutatePagination"]({total:(data["media_content"] as MediaPrototype[])["length"],loader:false} as any));
    },[data]);
    for(let $y = 0; $y <= (perPage - 1); $y++) $define_container_default_loader$["push"](
        <SkeletonTheme baseColor="rgba(33,37,41,0.8)" highlightColor="#787d79" key={$y}>
            <div className="col mt-3">
                <div style={{height:"600px"}} className="card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-8 lh-1 fw-bold">
                            <$Skeleton$ count={1}/>
                        </h3>
                        <div className="mb-3">
                            <span>
                                <$Skeleton$ style={{height:"20px"}} count={1}/>
                            </span>
                        </div>
                        <p className="lh-2 fw-bold">
                            <$Skeleton$ style={{height:"10px"}} count={8}/>
                        </p>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <$Skeleton$ count={1}/>
                            </li>
                            <li className="d-flex align-items-center me-3">
                                <$Skeleton$ count={1}/>
                            </li>
                            <li className="d-flex align-items-center">
                                <$Skeleton$ count={1}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );return(
        <$Listener$ context={context} seo={{$title$:t(`Page${$UpperString$(context)}Title`),$description$:$SprintF$(t("PageListenerHeaderDescriptionText"),{author:project["name"],context:t(`PageIndexSeeModeMediaBoxContent${$UpperString$(context)}Title`)["toLowerCase"]()}),$keywords$:t(`Page${$UpperString$(context)}Keyword`)["split"](",")}}>
            {error ? <$ComponentListenerErrorContainer$ $callback$={refetch}/> : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 align-items-stretch">
                    {loading ? $define_container_default_loader$ : (!data["media_content"] ? <$ComponentListenerNotFoundContainer$ /> : (data["media_content"]["length"] > 0 ? (data["media_content"] as MediaPrototype[])["map"](($object$,$iterator$) => (
                        <$ComponentMediaCardContainer$ {...$object$} key={$iterator$}/>
                    )) : (
                        <$ComponentListenerNotFoundContainer$ />
                    )))}
                </div>
            )}
        </$Listener$>
    );
};