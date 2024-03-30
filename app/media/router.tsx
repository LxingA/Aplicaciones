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
import $Viewer$ from './page/view';

/** Rutador Local de la Aplicación */
export default (createRoutesFromElements([
    <Route errorElement={<$Error$/>}>
        <Route index path="/" element={<$Home$/>}/>
        <Route path="/anime" element={<$Listener$ context="anime"/>}/>
        <Route path="/anime/view" element={<$Viewer$ context="anime"/>}/>
        <Route path="/music" element={<$Listener$ context="music"/>}/>
        <Route path="/music/view" element={<$Viewer$ context="music"/>}/>
        <Route path="/video" element={<$Listener$ context="video"/>}/>
        <Route path="/video/view" element={<$Viewer$ context="video"/>}/>
        <Route path="/game" element={<$Listener$ context="game"/>}/>
        <Route path="/game/view" element={<$Viewer$ context="game"/>}/>
    </Route>
]));