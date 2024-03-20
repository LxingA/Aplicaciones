/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 06/03/24 05:00PM
@description Página Principal para la Aplicación
*/
import {useEffect,useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {$Schedule$} from '../component/box';
import $SprintF$ from '../../../util/sprintf';
import type {Root} from '../../../bin/redux';
import $Social$ from '../component/social';
import $Logo$ from '../component/logo';

/** Página Principal de la Aplicación */
const $Home$ = () => {
    const {project:{location,social,telephone,mail},name,slogan,general,option} = useSelector(($context$:Root)=>$context$["global"]);
    const {t,i18n:{language,changeLanguage}} = useTranslation();
    const {search} = useLocation();
    useEffect(() => {
        document["title"] = `${slogan} - ${name}`;
    },[]);
    return (
        <div className="mainheader">
            <div className="col1" data-aos="fade-down" data-aos-duration="1500">
                <div className="content">
                    <$Logo$ />
                    <div className="desc">
                        <h3 dangerouslySetInnerHTML={{
                            __html: t("IndexPageHeaderTitle")
                        }}/>
                        <$Schedule$ $ranges$={general!["_h"]}/>
                    </div>
                    <div className="minidesc" dangerouslySetInnerHTML={{
                        __html: $SprintF$(t("IndexPageSubLabelText"),{
                            location: `${location["city"]}, ${location["state"]}`
                        })
                    }}/><br/>
                    <select defaultValue={language} onChange={event => changeLanguage(event["target"]["value"])}>
                        {option["languages"]["map"](({iso,label},iterator) => (
                            <option key={iterator} value={iso}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <$Social$ {...{social,telephone,email:mail}}/>
                </div>
            </div>
            <div className="col2">
                <div className="mainmenu" data-aos="fade-up" data-aos-duration="1500">
                    <ul>
                        <li>
                            <Link to={{pathname:"/price",search}}>
                                {t("GlobalNavbarPageLinkPricingLabel")}
                            </Link>
                        </li>
                        <li>
                            <Link to={{pathname:"/location",search}}>
                                {t("GlobalNavbarPageLinkGeolocationLabel")}
                            </Link>
                        </li>
                        <li>
                            <Link to={{pathname:"/policy",search}}>
                                {t("GlobalNavbarPageLinkPrivacyLabel")}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default $Home$;