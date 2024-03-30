/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 25/03/24 02:30PM
@description Página para Mostrar el Contenido de un Medio en la Aplicación
*/
import {Fragment,useState} from 'react';
import {useQuery} from '@apollo/client';
import {useSearchParams,Navigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {singleItem} from '../graphql/media';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useSelector} from 'react-redux';
import {$Star_Icon_Component$} from './index';
import {$ComponentListenerNotFoundContainer$,$ComponentListenerErrorContainer$} from '../component/listener.web';
import type {Root} from '../../../bin/redux';
import type {MediaType,Media as MediaPrototype,MediaCategory} from '../../../types/service/media';
import $Asset$ from '../../../util/asset';
import $Skeleton$ from 'react-loading-skeleton';
import $Template$ from '../template/view';
import $Default$ from '../template/default';
import $SprintF$ from '../../../util/sprintf';

/** Contenedor con el Deslizador para las Capturas de Pantalla del Medio */
const ComponentContainerSlider = () => {
    return (
        <div className="carousel slide" id="qawpLbgLiIJrrrjHRrgIjvLiaCJWouOoXRxo">
            
        </div>
    );
};

/** Contenedor con las Fichas del Medio */
const ComponentContainerRecord = ({category,context,description}:{
    /** Contenedor con las Categorías Actuales del Medio */
    category?: MediaCategory[],
    /** Contexto Actual de la Aplicación */
    context: MediaType,
    /** Descripción Acerca del Medio en la Perspectiva del Administrador */
    description?: string
}) => {
    const [currentTab,mutateTab] = useState<string>("xdgfbFAf");
    type LiContainerPrototype = {
        /** Identificador Único de la Categoría */
        identified: string,
        /** Nombre de Etiqueta a Mostrar en la Pestaña */
        label: string
    };
    const ComponentLiContainer = ({identified,label}:LiContainerPrototype) => {
        const active = (identified == currentTab);
        return (
            <li className="nav-item" onClick={_ => mutateTab(identified)}>
                <a style={!active ? {cursor:"pointer"} : undefined} className={`nav-link${active ? " active": ""}`}>
                    {label}
                </a>
            </li>
        );
    };let currentContainer: JSX.Element = <div/>;switch(currentTab){
        case "xdgfbFAf":
            currentContainer = (
                <p className="mt-2">
                    {description}
                </p>
            );
        break;
        case "OWgongGK":
            currentContainer = <p></p>;
        break;
    }return (
        <div className="card" style={{height:"30vh"}}>
            <div className="card-head">
                <ul className="nav nav-tabs">
                    {([
                        {
                            label: "Sinopsis",
                            identified: "xdgfbFAf"
                        },
                        {
                            label: "Ficha Técnica",
                            identified: "OWgongGK"
                        }
                    ] as LiContainerPrototype[])["map"](({label,identified},iterator) => (
                        <ComponentLiContainer key={iterator} {...{label,identified}}/>
                    ))}
                </ul>
            </div>
            <div className="card-body">
                {currentContainer}
            </div>
        </div>
    );
};

/** Página para Mostrar el Contenido Esencial de un Medio en la Aplicación */
export default function $View$({context}:{
    /** Definición del Contexto Actual de la Vista */
    context: MediaType
}){
    const [query] = useSearchParams();
    if(!query["has"]("k")) return <Navigate to="/" replace/>;
    else if(!(/^[a-zA-Z]{8}$/["test"](query["get"]("k")!))) return (
        <$Default$>
            <$ComponentListenerNotFoundContainer$ />
        </$Default$>
    );
    const {project,name} = useSelector(($current$:Root)=>$current$["global"]);
    const {i18n:{language},t} = useTranslation();
    const {loading,error,data,refetch} = useQuery(singleItem,{context:{language},variables:{identified:query["get"]("k"),context}});
    const $Rate_Stars_Container$: JSX.Element[] = [];
    if(data) for(let $o$ = 0; $o$ <= ((data["media_content"]["item"] as MediaPrototype[])[0]["rate"]! - 1); $o$++) $Rate_Stars_Container$["push"](<$Star_Icon_Component$ key={$o$}/>);
    return error ? (
        <$Default$>
            <$ComponentListenerErrorContainer$ $callback$={refetch}/>
        </$Default$>
    ) : (loading ? (
        <$Default$>
            <div className="card">
                <div className="card-header">
                    <$Skeleton$ style={{height:"80vh"}} count={1}/>
                </div>
            </div>
        </$Default$>
    ) : (
        <$Template$ seo={{$title$:`${$SprintF$(t("PageViewSEOTitleDefault"),{title:(data["media_content"]["item"] as MediaPrototype[])[0]["name"]})} - ${project["alternative"][2]} ${name}`,$description$:(data["media_content"]["item"] as MediaPrototype[])[0]["description"]}}>
            <div className="card">
                {((data["media_content"]["item"] as MediaPrototype[])["map"](({media,name,meta,description},$iterator$) => (
                    <Fragment key={$iterator$}>
                        <div className="card-header" style={{height:"85vh",maxHeight:"85vh",backgroundImage:`url(${$Asset$((media["background"]!)["substring"](1))})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}}>
                            <div style={{height:"100%",backgroundColor:"#0e1e318a",backdropFilter:"blur(6px)",border:"2px dashed white",borderRadius:"10px"}} className="container d-flex justify-content-center align-items-center">
                                <div style={{position:"relative",left:"1vh"}} className="row text-center">
                                    <div style={{position:"relative",right:"1.5vh"}} className="col mt-5">
                                        <LazyLoadImage effect="blur" width={250} height={250} className="img-fluid img-thumbnail" src={$Asset$((media["cover"]!)["substring"](1))}/>
                                    </div>
                                    <div style={{position:"relative",top:"4vh"}} className="row px-3 py-5 my-5 text-center">
                                        <div style={{color:"white"}}>
                                            {$Rate_Stars_Container$}
                                        </div>
                                        <h1 style={{color:"white"}} className="display-6 fw-bold">
                                            {name}
                                        </h1>
                                        <button style={{width:"20vh",position:"relative",margin:"0 auto"}} className="btn btn-outline-light mt-4 p-5 rounded-circle">
                                            <span style={{fontSize:"36px"}} className="material-icons-outlined">
                                                vertical_align_bottom
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <ComponentContainerRecord category={meta} {...{context,description}}/>
                        </div>
                        <div className="card-footer">
                            fdfd
                        </div>
                    </Fragment>
                )))}
            </div>
        </$Template$>
    ));
};