/*
@author LxingA
@project CodeInk
@name Global
@date 21/03/24 01:30AM
@description Definición del Tipo para la Obtención de los Medios para la Aplicación
*/
import {gql} from '@apollo/client';

/** Definición del Prototipo para la Obtención de los Medios de la Aplicación */
export default gql`
    query Content($paginator:Pagination,$filter:[String],$context:String!,$search:String){
        media_content(paginator:$paginator,filter:$filter,context:$context,search:$search){
            name,
            description,
            rate,
            meta {
                id,
                label,
                item {
                    label,
                    identified
                }
            },
            media {
                cover,
                background,
                snapshot
            }
        }
    }
`;