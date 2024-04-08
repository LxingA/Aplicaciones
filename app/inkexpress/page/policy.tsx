/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 07/03/24 01:30PM
@description Página para Mostrar la Política de Compra de la Aplicación
*/
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {$Pricing$} from '../component/box';
import type {Root} from '../../../bin/redux';
import $Asset$ from '../../../util/asset';
import $Logo$ from '../component/logo';
import $Social$ from '../component/social';

/** Página DOM para Mostrar la Política de Compra en la Aplicación */
const $Policy$ = () => {
    const {t} = useTranslation("inkexpress");
    const {project:{telephone,social,mail,location},name,general} = useSelector(($context$:Root)=>$context$["global"]);
    useEffect(() => {
        document["title"] = `${t("GlobalNavbarPageLinkPrivacyLabel")} - ${name}`;
    });
    return (
        <div className="mainheader precios">
            <div className="col1" data-aos="fade-down" data-aos-duration="1500">
                <div className="content">
                    <$Logo$ />
                    <div className="contentBlog">
                        <div className="Parrafos maxwidth">
                            <h2 dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraph0HeaderTitle")
                            }}/>
                            <span dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraph0ContentText")
                            }}/>
                            <h2 dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraph1HeaderTitle")
                            }}/>
                            <span dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraph1ContentText")
                            }}/>
                            <h2 dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraph2HeaderTitle")
                            }}/>
                            <span dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraph2ContentText")
                            }}/>
                            <h2>
                                {t("PolicyPageParagraph3HeaderTitle")}
                            </h2>
                            <p>
                                {t("PolicyPageParagraph3DescriptionText")}
                            </p>
                            <img src={$Asset$("map/coverage_shipments.webp")} style={{width:"100%",pointerEvents:"none",display:"block",marginBottom:"25px"}}/>
                            <$Pricing$ $location$={location} $services$={general!["_e"]}/>
                            <span dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraph3ContentText")
                            }}/>
                            <span dangerouslySetInnerHTML={{
                                __html: t("PolicyPageParagraphNewConditionContextText")
                            }}></span>
                        </div>
                    </div>
                    <$Social$ {...{telephone,social,email:mail}}/>
                </div>
            </div>
        </div>
    );
};

export default $Policy$;