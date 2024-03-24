/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 14/03/24 10:00PM
@description Inicialización de la Aplicación
*/
import '@material-design-icons/font/index.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css';
import './style.css';
import './script';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import $Router$ from './router';

/** Inicialización de la Aplicación */
export default function App(){
    return (
        <RouterProvider router={createBrowserRouter($Router$)}/>
    );
}