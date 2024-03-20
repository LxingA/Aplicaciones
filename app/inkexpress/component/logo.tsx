/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 06/03/24 11:30PM
@description Componente para Mostrar el Logo Global de la Aplicación
*/
import {Link,useLocation} from 'react-router-dom';
import $Asset$ from '../../../util/asset';

/** Componente con el Contenedor del Logo Global de la Aplicación */
const $Logo$ = () => {
    const {search} = useLocation();
    return (
        <Link to={{pathname:"/",search}} className="logo">
            <img src={$Asset$("logo.webp")}/>
        </Link>
    );
};

export default $Logo$;