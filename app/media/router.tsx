/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 15/03/24 04:30PM
@description Definición del Rutador Local de la Aplicación
*/
import {createRoutesFromElements,Route} from 'react-router-dom';
import $Error$ from '../../view/error';
import $Home$ from './page';
import $Listener$ from './page/listener';

/** Rutador Local de la Aplicación */
export default (createRoutesFromElements([
    <Route errorElement={<$Error$/>}>
        <Route index path="/" element={<$Home$/>}/>
        <Route path="/anime" element={<$Listener$ context="anime"/>}/>
        <Route path="/music" element={<$Listener$ context="music"/>}/>
        <Route path="/video" element={<$Listener$ context="video"/>}/>
        <Route path="/game" element={<$Listener$ context="game"/>}/>
    </Route>
]));