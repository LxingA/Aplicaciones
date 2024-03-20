/*
@author LxingA
@project CodeInk Apps
@name SocASF Anime [anime]
@date 19/03/24 2:00AM
@description Página para Mostrar el Listado de las Canciones de los Medios de la Aplicación
*/
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import type {Root} from '../../../../bin/redux';
import $Listener$ from "../../template/listener";
import $SprintF$ from '../../../../util/sprintf';

/** Definición de la Página para Instanciar la Visualización de las Canciones */
export default function Music(){
    const {t} = useTranslation();
    const {project} = useSelector(($current$:Root)=>$current$["global"]);
    return (
        <$Listener$ context="music" seo={{$title$:t("PageMusicTitle"),$description$:$SprintF$(t("PageListenerHeaderDescriptionText"),{author:project["name"],context:t("PageIndexSeeModeMediaBoxContentMusicTitle")["toLowerCase"]()}),$keywords$:t("PageMusicKeyword")["split"](",")}}>
            <p>djkasdas2</p>
        </$Listener$>
    );
};