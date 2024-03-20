/*
@author LxingA
@project CodeInk Apps
@name SocASF Anime [anime]
@date 18/03/24 11:00PM
@description Página para Mostrar el Listado de los Animes de los Medios de la Aplicación
*/
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import type {Root} from '../../../../bin/redux';
import $Listener$ from "../../template/listener";
import $SprintF$ from '../../../../util/sprintf';

const $ComponentAnimeCardContainer$ = () => {
    return (
        <div className="col">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        fdsfsdf
                    </div>
                    <div className="col-md-8">
                        fsdfds
                    </div>
                </div>
            </div>
        </div>
    );
};

/** Definición de la Página para Instanciar la Visualización de los Animes */
export default function Anime(){
    const {t} = useTranslation();
    const {project} = useSelector(($current$:Root)=>$current$["global"]);
    return (
        <$Listener$ context="anime" seo={{$title$:t("PageAnimeTitle"),$description$:$SprintF$(t("PageListenerHeaderDescriptionText"),{author:project["name"],context:t("PageIndexSeeModeMediaBoxContentAnimeTitle")["toLowerCase"]()}),$keywords$:t("PageAnimeKeyword")["split"](",")}}>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                
            </div>
        </$Listener$>
    );
};