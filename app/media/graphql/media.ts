/*
@author LxingA
@project CodeInk
@name Global
@date 21/03/24 01:30AM
@description Definición del Tipo para la Obtención de los Medios para la Aplicación
*/
import {gql} from '@apollo/client';

/** Obtención de la Información Completa de un Sólo Elemento */
export const singleItem = gql`
    query FullContent($identified:String!,$context:String!){
        media_content(identified:$identified,context:$context){
            item {
                ...MediaContextContentEssentialData
            }
        }
    }
`;

/** Definición del Prototipo para la Obtención de los Medios de la Aplicación */
export default gql`
    query PartialContent($paginator:Pagination,$filter:[String],$context:String!,$search:String){
        media_content(paginator:$paginator,filter:$filter,context:$context,search:$search){
            item {
                ...MediaContextContentEssentialData
            },
            total {
                pages,
                elements
            }
        }
    }
`;