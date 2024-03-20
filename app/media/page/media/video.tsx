/*
@author LxingA
@project CodeInk Apps
@name SocASF Anime [anime]
@date 19/03/24 2:00AM
@description Página para Mostrar el Listado de los Vídeos Públicos de los Medios de la Aplicación
*/
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import type {Root} from '../../../../bin/redux';
import $Listener$ from "../../template/listener";
import $SprintF$ from '../../../../util/sprintf';

/** Definición de la Página para Instanciar la Visualización de los Vídeos Públicos */
export default function Video(){
    const {t} = useTranslation();
    const {project} = useSelector(($current$:Root)=>$current$["global"]);
    return (
        <$Listener$ context="video" seo={{$title$:t("PageVideoTitle"),$description$:$SprintF$(t("PageListenerHeaderDescriptionText"),{author:project["name"],context:t("PageIndexSeeModeMediaBoxContentVideoTitle")["toLowerCase"]()}),$keywords$:t("PageVideoKeyword")["split"](",")}}>
            <p>djkasdas2</p>
        </$Listener$>
    );
};