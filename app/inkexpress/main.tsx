/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 06/03/24 01:00AM
@description Inicialización de la Aplicación
*/
import {useLayoutEffect,useEffect} from 'react';
import $Asset$ from '../../util/asset';
import $DOM$ from '../../util/dom';
import $Animate$ from 'aos';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import $Router$ from './router';

/** Inicialización de la Aplicación */
const $App$ = () => {
    useLayoutEffect(() => {
        $DOM$({$document$:document,$attribute$:{
            id: `ckapp-style-animate`,
            rel: "stylesheet",
            href: $Asset$("vendor/animate.css"),
            type: "text/css"
        }});
        $DOM$({$document$:document,$attribute$:{
            id: `ckapp-style-aos`,
            rel: "stylesheet",
            href: $Asset$("vendor/aos.css"),
            type: "text/css"
        }});
        $DOM$({$document$:document,$attribute$:{
            id: `ckapp-style-icons`,
            rel: "stylesheet",
            href: "https://unicons.iconscout.com/release/v4.0.8/css/line.css",
            type: "text/css"
        }});
    },[]);
    useEffect(() => {
        $Animate$["init"]();
    },[]);
    return (
        <RouterProvider router={createBrowserRouter($Router$)}/>
    );
};

export default $App$;