/*
@author LxingA
@project CodeInk Apps
@name SocASF Anime [anime]
@date 15/03/24 04:30PM
@description Definición del Rutador Local de la Aplicación
*/
import {createRoutesFromElements,Route} from 'react-router-dom';
import $Error$ from '../../view/error';
import $Home$ from './page';
import $Anime$ from './page/media/anime';
import $Game$ from './page/media/game';
import $Video$ from './page/media/video';
import $Music$ from './page/media/music';

/** Rutador Local de la Aplicación */
export default (createRoutesFromElements([
    <Route errorElement={<$Error$/>}>
        <Route index path="/" element={<$Home$/>}/>
        <Route path="/anime" element={<$Anime$/>}/>
        <Route path="/music" element={<$Music$/>}/>
        <Route path="/video" element={<$Video$/>}/>
        <Route path="/game" element={<$Game$/>}/>
    </Route>
]));