/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 09/03/24 12:30AM
@description Definición del Rutador Local de la Aplicación
*/
import {createRoutesFromElements,Route} from 'react-router-dom';
import $Error$ from '../../view/error';
import $Index$ from './page';
import $Price$ from './page/pricing';
import $Location$ from './page/location';
import $Policy$ from './page/policy';

/** Rutador Local de la Aplicación */
const $Router$ = (createRoutesFromElements(
    <Route errorElement={<$Error$/>}>
        <Route path="/" index element={<$Index$/>}/>
        <Route path="/price" element={<$Price$/>}/>
        <Route path="/location" element={<$Location$/>}/>
        <Route path="/policy" element={<$Policy$/>}/>
    </Route>
));

export default $Router$;