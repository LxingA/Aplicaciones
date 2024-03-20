/*
@author LxingA
@project CodeInk Apps
@name Imprenta Express [inkexpress]
@date 06/03/24 11:30PM
@description Componente para la Área de las Redes Sociales
*/
import type {Social} from '../../../types/service';
import $SprintF$ from '../../../util/sprintf';

/** Componente con el Contenedor de las Redes Sociales de la Aplicación */
const $Social$ = ({social,telephone,email}:{
    /** Contenedor con las Redes Sociales del Proyecto Actual */
    social: Social[],
    /** Número de Telefóno Asociada al Proyecto */
    telephone: string,
    /** Correo Electrónico Asociado al Proyecto */
    email: string
}) => {
    return (
        <div className="redes">
            {social["map"](({name,icon,url}) => (
                <a key={name} style={{cursor:"pointer"}} onClick={() => window["open"]($SprintF$(url,{
                    telephone,
                    email
                }),"_blank")}>
                    <i className={`uil uil-${icon}`}></i>
                </a>
            ))}
        </div>
    );
};

export default $Social$;