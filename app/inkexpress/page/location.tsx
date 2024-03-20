/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 07/03/24 01:30PM
@description Página para Mostrar la Ubicación de la Aplicación
*/
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Link,useLocation} from 'react-router-dom';
import {$Pricing$} from '../component/box';
import type {Root} from '../../../bin/redux';
import $Logo$ from '../component/logo';
import $Social$ from '../component/social';

/** Página para Mostrar la Ubicación de la Aplicación */
const $Location$ = () => {
    const {t} = useTranslation();
    const {name,project:{social,location,telephone,mail},general} = useSelector(($context$:Root)=>$context$)["global"];
    const {search} = useLocation();
    useEffect(() => {
        document["title"] = `${t("LocationPageTitleHeader")} - ${name}`;
    },[]);
    return (
        <div className="mainheader precios">
            <div className="col1" data-aos="fade-down" data-aos-duration="1500">
                <div className="content">
                    <$Logo$ />
                    <h3 className="principal">
                        {t("LocationPageTitleHeader")}
                    </h3>
                    <p className="principal" style={{lineHeight:"150%"}}>
                        <a className="full" onClick={() => window["open"](social["filter"](({name}) => name == "fb")[0]["url"],"_blank")} style={{cursor:"pointer"}}>
                            {t("PricePageHeaderButtonLabel")}
                        </a><br/>
                        {t("PricePageHeaderDescription")}<br/><br/>
                        <$Pricing$ $location$={location} $services$={general!["_e"]}/>
                    </p>
                    <p className="principal" style={{lineHeight:"150%"}}>
                        {t("LocationPagePolicyContentDescriptionText")}
                        <Link to={{pathname:"/policy",search}} className="full">
                            {t("LocationPagePolicyContentButtonLabel")}
                        </Link>
                    </p>
                    <$Social$ {...{telephone,social,email:mail}}/>
                </div>
            </div>
        </div>
    );
};

export default $Location$;