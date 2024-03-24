/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 15/03/24 06:00PM
@description Plantilla Predeterminada para la Aplicación
*/
import {Fragment} from 'react';
import $Header$ from '../component/header.web';
import $Footer$ from '../component/footer.web';

/** Plantilla Predeterminada para la Aplicación */
export default function Template({children}:{
    children: JSX.Element
}){
    return (
        <Fragment>
            <div className="container">
                <$Header$ />
                    {children}
                <$Footer$ />
            </div>
        </Fragment>
    );
};