/*
@author LxingA
@project CodeInk
@name Global
@date 10/03/24 10:00PM
@description Definición del Tipo para la Obtención de las Categorias para la Aplicación
*/
import {gql} from '@apollo/client';

/** Definición del Prototipo GraphQL para la Obtención de las Categorías de la Aplicación */
const $GraphQLCategory$ = gql`
    query Category {
        category {
            title,
            product,
            message,
            image
        }
    }
`;

export default $GraphQLCategory$;