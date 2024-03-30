/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 15/03/24 06:00PM
@description Definición con las Cabeceras Esenciales de la Aplicación
*/
import {Fragment} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {$Action$} from '../../../util/reducer';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import type {Root} from '../../../bin/redux';
import type {CSSProperties} from 'react';
import type {Language} from '../../../types/application';
import $Asset$ from '../../../util/asset';

/** Complemento Esencial para el Selector de Idioma de la Aplicación */
export const $AddonComponentLanguageContainerSelector$ = ({style,languages}:{
    /** Objeto para la Manipulación del Estilo del Componente */
    style?: CSSProperties,
    /** Contenedor con los Idiomas Globales para la Aplicación */
    languages: Language[]
}) => {
    const {i18n:{language,changeLanguage}} = useTranslation();
    return (
        <select defaultValue={language} style={{...style,height:"100%"}} className="form-select form-select-sm" onChange={$event$ => changeLanguage($event$["target"]["value"])}>
            {languages["map"](({iso,label},$iterator$) => (
                <option key={$iterator$} value={iso}>
                    {label}
                </option>
            ))}
        </select>
    );
};

/** Complemento Esencial para el Selector del Tema para la Aplicación */
export const $AddonComponentButtonDarkModeSelector$ = ({current,style}:{
    /** Modo Obscuro Actual de la Aplicación */
    current: boolean,
    /** Objeto para la Manipulación del Estilo del Componente */
    style?: CSSProperties
}) => {
    const $dispatcher$ = useDispatch();
    return (
        <button style={style} className={`btn btn-outline-${current ? "light" : "dark"} btn-sm`} onClick={$event$ => {
            $event$["preventDefault"]();
            $dispatcher$($Action$["$global$"]["$dark$"](!current));
        }}>
            <span className="material-icons-outlined" style={{position:"relative",top:"2px"}}>
                {current ? "dark_mode" : "light_mode"}
            </span>
        </button>
    );
};

/** Definición del Componente Global para la Cabecera de la Aplicación */
export default function Header(){
    const {dark,option:{languages},name,project} = useSelector(($state$:Root)=>$state$["global"]);
    return (
        <Fragment>
            <header className="p-3 mb-3">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                            <LazyLoadImage style={{position:"relative",right:"6px"}} effect="blur" alt={`${project["alternative"][2]} ${name}`} className="bi me-2" width={48} src={$Asset$(`logo-${dark ? "light" : "dark"}.webp`)}/>
                            <span className="fs-4">
                                {project["alternative"][2]} {name}
                            </span>
                        </Link>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"></form>
                        <div className="text-end">
                            <div className="row">
                                <div className="col" style={{position:"relative",left:"2vh"}}>
                                    <$AddonComponentButtonDarkModeSelector$ current={dark}/>
                                </div>
                                <div className="col">
                                    <$AddonComponentLanguageContainerSelector$ {...{languages}} style={{width:"10vh"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};