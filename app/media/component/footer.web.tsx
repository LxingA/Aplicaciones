/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 16/03/24 01:30AM
@description Componentes Esenciales para el Píe de Página de la Aplicación
*/
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import type {Root} from '../../../bin/redux';
import $Asset$ from '../../../util/asset';
import $SprintF$ from '../../../util/sprintf';

/** Componente para Mostrar el Píe de Página de la Aplicación */
export default function Footer(){
    const {t} = useTranslation();
    const {project:{alternative,name},dark,endpoint,version} = useSelector(($state$:Root)=>$state$["global"]);
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <p style={{fontSize:"14px"}} className="col-md-4 mb-0 text-body-secondary" dangerouslySetInnerHTML={{__html:$SprintF$(t("ComponentFooterCopyrightText"),{year:(new Date())["getFullYear"](),site:alternative[0],author:name,version})}}/>
            <Link to="/" className="bi me-2">
                <LazyLoadImage effect="blur" width={64} src={$Asset$(`logo-${dark ? "light" : "dark"}.webp`)}/>
            </Link>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                    <button onClick={() => window["open"](`${endpoint["shortener"]}/legal`,"_blank")} className={`btn btn-outline-${dark ? "light" : "dark"} btn-sm`} style={{position:"relative",right:"3px"}}>
                        <span className="material-icons-outlined" style={{position:"relative",top:"2px"}}>
                            policy
                        </span>
                    </button>
                </li>
            </ul>
        </footer>
    );
};