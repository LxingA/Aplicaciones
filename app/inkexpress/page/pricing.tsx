/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 06/03/24 11:30PM
@description Página para Mostrar los Precios de los Productos
*/
import {useEffect,Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {$Products$,$Message$} from '../component/box';
import {useQuery} from '@apollo/client';
import type {Root} from '../../../bin/redux';
import $SprintF$ from '../../../util/sprintf';
import $Logo$ from '../component/logo';
import $Social$ from '../component/social';
import $GraphQLCategory$ from '../graphql/category';

/** Definición del DOM para Mostrar el Listado de los Productos de la Aplicación */
const $ListingProductsDOM$ = ({$language$}:{
    /** Idioma Currente de la Aplicación */
    $language$: string
}) => {
    const {t} = useTranslation();
    const {loading,error,data,refetch} = useQuery($GraphQLCategory$,{context:{language:$language$},notifyOnNetworkStatusChange:true,fetchPolicy:"cache-and-network"});
    const $error$ = (t("GraphQLQueryErrorUnknown")["split"]("|"));
    if(error) return (
        <Fragment>
            <$Message$ $title$={$error$[0]} $description$={$error$[1]} $button$={{$label$:t("GraphQLQueryErrorButtonTryLabel"),$local$:false,$callback$:(() => refetch())}}/><br/><br/>
        </Fragment>
    );return loading ? (
        <Fragment>
            <p>{t("PricePageListingProductsLoadingText")}</p><br/><br/>
        </Fragment>
    ) : (
        <Fragment>
            <$Products$ $item$={data["category"]}/><br/><br/>
        </Fragment>
    );
};

/** Página DOM para Mostrar los Productos de la Aplicación */
const $Price$ = () => {
    const year = (new Date())["getFullYear"]();
    const {name,project:{social,telephone,mail}} = useSelector(($context$:Root)=>$context$)["global"];
    const {t,i18n:{language}} = useTranslation();
    useEffect(() => {
        document["title"] = `${$SprintF$(t("PricePageTitleHeader"),{year})} - ${name}`;
    },[]);
    return (
        <div className="mainheader precios">
            <div className="col1" data-aos="fade-down" data-aos-duration="1500">
                <div className="content">
                    <$Logo$ />
                    <h3 className="principal">
                        {$SprintF$(t("PricePageTitleHeader"),{year})}
                    </h3>
                    <p className="principal">
                        {t("PricePageHeaderDescription")}
                        <a className="full" style={{cursor:"pointer"}} onClick={() => window["open"](social["filter"](({name})=>name=="fb")[0]["url"],"_blank")}>
                            {t("PricePageHeaderButtonLabel")}
                        </a>
                    </p>
                    <$ListingProductsDOM$ $language$={language}/>
                    <$Message$ $title$={t("PricePageListingProductsBoxHelpTitle")} $description$={t("PricePageListingProductsBoxHelpMessage")} $button$={{$label$:t("PricePageListingProductsBoxHelpButtonLabel"),$local$:false,$url$:$SprintF$(social["filter"](({name}) => name == "wa")[0]["url"],{telephone})}}/>
                    <$Social$ {...{telephone,social,email:mail}}/>
                </div>
            </div>
        </div>
    );
};

export default $Price$;