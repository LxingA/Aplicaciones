/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 15/03/24 06:00PM
@description Página Principal de la Aplicación
*/
import {Fragment,useState} from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {Link,useLocation} from 'react-router-dom';
import type {Root} from '../../../bin/redux';
import type {Project} from '../../../types/service';
import type {SetStateAction,Dispatch} from 'react';
import $Asset$ from '../../../util/asset';
import $Template$ from "../template/default";
import $SEO$ from '../../../util/seo';
import $SprintF$ from '../../../util/sprintf';

/** Plantilla Predeterminada para Mostrar en la Vista de la Página Principal */
const $Default$ = ({endpoint,project,callback}:{
    /** Ruta Absoluta HTTP del Punto Final del Acortador del Proyecto */
    endpoint: string,
    /** Objeto con la Información del Proyecto Asociada al Servicio */
    project: Project,
    /** Referencia de la Función para la Alteración de la Vista */
    callback: Dispatch<SetStateAction<boolean>>
}) => {
    const {t} = useTranslation();
    return (
        <div className="px-4 text-center border-bottom">
            <h1 className="display-4 fw-bold text-body-emphasis">
                {t("PageIndexHeaderTitleText")}
            </h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4" dangerouslySetInnerHTML={{__html:$SprintF$(t("PageIndexHeaderTitleMessage"),{author:project["name"],year:(new Date())["getFullYear"]()})}}/>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button className="btn btn-primary btn-lg px-4 me-sm-3" onClick={$event$ => {
                        $event$["preventDefault"]();
                        callback(true);
                    }}>
                        {t("PageIndexHeaderButtonActionGoListsLabel")}
                    </button>
                    <button className="btn btn-outline-secondary btn-lg px-4" onClick={() => window["open"](`${endpoint}/portal`,"_blank")}>
                        {t("PageIndexHeaderButtonActionGoDocsLabel")}
                    </button>
                </div>
            </div>
            <div className="overflow-hidden" style={{maxHeight:"30vh"}}>
                <div className="container px-5">
                    <LazyLoadImage effect="blur" width={500} loading="lazy" src={$Asset$("background/home_page_header.webp")} className="img-fluid border rounded-3 shadow-lg mb-4"/>
                </div>
            </div>
        </div>
    );
};

/** Componente para Mostrar las Estrellas de Calificación */
export const $Star_Icon_Component$ = () => {
    return (
        <span className="material-icons-outlined md-18">
            star
        </span>
    );
};

/** Vista para la Visualización de la Multimedia en General para la Página Principal de la Aplicación */
const $SeeView$ = ({project}:{
    /** Objeto con la Información del Proyecto Asociada al Servicio */
    project: Project
}) => {
    const {t} = useTranslation();
    /** Definición del Prototipo para los Contenedores Ilustrativos para los Medios */
    type $Media_Box_Object$ = {
        /** Titulo a Mostrar en el Contenedor Ilustrativo para el Medio */
        title: string,
        /** Rango de Calificación del Medio (1 ~ 4) */
        rate: number,
        /** Descripción Acerca del Medio para la Ilustración */
        description: string,
        /** Ruta Relativa a Redireccionar la Ilustración al Medio */
        href: string
    };
    /** Componente para la Renderización HTML de los Contenedores Ilustrativos de los Medios */
    const $Media_Box_Component$ = ({container}:{
        /** Contenedor con los Medios Ilustrativos para la Aplicación */
        container: $Media_Box_Object$[]
    }) => {
        const {search} = useLocation();
        /** Definición del Componente para Mostrar la Estrella */
        return (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-stretch">
                {container["map"](({title,rate,description,href},$iterator$) => {
                    let $Component_Stars_Container$: JSX.Element[] = [];
                    for(let $o = 0; $o <= (rate - 1); $o++) $Component_Stars_Container$["push"](<$Star_Icon_Component$ key={$o}/>);
                    return (
                        <div className="col g-4" key={$iterator$}>
                            <div style={{height:"600px",backgroundImage:`url(${$Asset$(`cover/home_seemode_${href["substring"](1)}_cover.webp`)})`}} className="card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                <div style={{background:"#231f1f8f"}} className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-5 lh-1 fw-bold">
                                        {title}
                                    </h3>
                                    <p className="lh-2 fw-bold">
                                        {description}
                                    </p>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            {$Component_Stars_Container$}
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <Link style={{position:"relative",left:"2vh",bottom:"0.7vh"}} className="btn btn-outline-light" to={{search,pathname:href}}>
                                                {t("PageIndexSeeModeComponentBoxButtonViewActionLabel")}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    return (
        <div className="container">
            <div className="p-4 p-md-5 rounded bg-body-secondary" style={{color:"white",background:`url(${$Asset$("cover/home_seemode_header_cover.webp")})`,backgroundAttachment:"fixed",backgroundPosition:"8% bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <div className="col-lg-6 px-0">
                    <h1 className="display-4 fst-italic">
                        {t("PageIndexSeeModeHeaderTitle")}
                    </h1>
                    <p className="lead my-3" dangerouslySetInnerHTML={{__html:$SprintF$(t("PageIndexSeeModeHeaderDescription"),{author:project["name"]})}}/>
                </div>
            </div>
            <$Media_Box_Component$ container={[
                {
                    title: t("PageIndexSeeModeMediaBoxContentAnimeTitle"),
                    rate: 4,
                    description: t("PageIndexSeeModeMediaBoxContentAnimeDescription"),
                    href: "/anime"
                },
                {
                    title: t("PageIndexSeeModeMediaBoxContentMusicTitle"),
                    rate: 4,
                    description: t("PageIndexSeeModeMediaBoxContentMusicDescription"),
                    href: "/music"
                },
                {
                    title: t("PageIndexSeeModeMediaBoxContentGameTitle"),
                    rate: 3,
                    description: t("PageIndexSeeModeMediaBoxContentGameDescription"),
                    href: "/game"
                },
                {
                    title: t("PageIndexSeeModeMediaBoxContentVideoTitle"),
                    rate: 2,
                    description: t("PageIndexSeeModeMediaBoxContentVideoDescription"),
                    href: "/video"
                }
            ]}/>
        </div>
    );
};

/** Página Principal de la Aplicación */
export default function Home(){
    const [seeMode,setSeeMode] = useState<boolean>(false);
    const {name,project,keywords,slogan,description,endpoint} = useSelector(($state$:Root)=>$state$["global"]);
    return (
        <Fragment>
            <$SEO$ $title$={`${slogan} - ${project["alternative"][2]} ${name}`} $keywords$={keywords} $description$={description}/>
            <$Template$>
                {seeMode ? (
                    <$SeeView$ {...{project}}/>
                ) : (
                    <$Default$ endpoint={endpoint["shortener"]} callback={setSeeMode} {...{project}}/>
                )}
            </$Template$>
        </Fragment>
    );
};