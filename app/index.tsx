/*
@author LxingA
@project CodeInk
@name Global
@date 08/03/24 07:40PM
@description Inicialización de las Aplicaciones
*/
import {useEffect,useInsertionEffect,useState,Suspense} from 'react';
import {useSelector} from 'react-redux';
import {$Initial$} from '../util/reducer';
import {I18nextProvider} from 'react-i18next';
import {ApolloProvider} from '@apollo/client';
import $Application$ from '../app/media/main';
import $Asset$ from '../util/asset';
import $GraphQL$ from '../bin/graphql';
import $Default$ from '../view/default';
import $Language$ from '../util/i18n';
import $DOM$ from '../util/dom';
import $Redux$ from '../bin/redux';
import type {Root} from '../bin/redux';

/** Inicialización Esencial de los Recursos para las Aplicaciones */
export default () => {
    const {initial:{ready,message,error},endpoint,analytic,identified,localStyle} = useSelector(($c$:Root)=>$c$["global"]);
    const [loadedDOM,setLoadedDOM] = useState<boolean>(false);
    useInsertionEffect(() => {
        if(ready){
            $DOM$(({$document$:document,$attribute$:{
                id: "ck_endpoint_asset",
                rel: "preconnect",
                href: endpoint["asset"]
            }}));
            $DOM$({$document$:document,$attribute$:{
                id: "g-analytic-script",
                src: analytic["endpoint"]["replace"]("k",analytic["key"]),
                type: "text/javascript",
                async: true
            },$to$:"body",$type$:"script"});
            $DOM$({$document$:document,$attribute$:{
                id: "g-analytic-init",
                type: "text/javascript"
            },$to$:"body",$type$:"script",$content$:"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer[\"push\"](arguments)};gtag(\"js\",(new Date()));gtag(\"config\",\""+analytic["key"]+"\")"});
            $DOM$({$document$:document,$attribute$:{
                id: "ck-favicon-asset",
                rel: "icon",
                href: $Asset$("favicon.ico"),
                type: "image/x-icon"
            }});
            if(!localStyle){
                $DOM$({$document$:document,$attribute$:{
                    id: "ck-style-root",
                    rel: "stylesheet",
                    href: $Asset$("style.css"),
                    type: "text/css"
                }});
                $DOM$({$document$:document,$attribute$:{
                    id: "ck-style-mobile",
                    rel: "stylesheet",
                    href: $Asset$("mobile.css"),
                    type: "text/css"
                }});
                setLoadedDOM(true);
            }else setLoadedDOM(true);
        }
    },[ready]);
    useEffect(() => {
        $Redux$["dispatch"]($Initial$());
    },[]);
    return (loadedDOM && ready) ? (
        <I18nextProvider i18n={$Language$(identified["split"]("-")[1])} defaultNS="translations">
            <Suspense>
                <ApolloProvider client={$GraphQL$}>
                    <$Application$ />
                </ApolloProvider>
            </Suspense>
        </I18nextProvider>
    ) : (error) && <$Default$ $title$="Inicialización" $message$={message ?? "Hubo un error al inicializar la aplicación"}/>
};