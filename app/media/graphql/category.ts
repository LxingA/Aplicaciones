/*
@author LxingA
@project CodeInk
@name Global
@date 19/03/24 10:30PM
@description Definición del Tipo para la Obtención de las Categorias para la Aplicación
*/
import {gql} from '@apollo/client';

/** Definición del Prototipo para la Obtención de las Categorías de la Aplicación */
export default gql`
    query Category($context:String!){
        media_category(context:$context){
            name,
            description,
            children {
                label,
                identified
            },
            identified
        }
    }
`;