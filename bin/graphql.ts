/*
@author LxingA
@project CodeInk
@name Global
@date 10/03/24 10:00PM
@description Integración de Apollo GraphQL como Servidor API para las Aplicaciones del Proyecto
*/
import {ApolloClient,ApolloLink,InMemoryCache,HttpLink,concat,gql} from '@apollo/client';
import {createPersistedQueryLink} from '@apollo/client/link/persisted-queries';
import {createFragmentRegistry} from '@apollo/client/cache';
import {sha256} from 'crypto-hash';
import type GraphQLContext from '../types/context';

/** Instancia del Cliente Apollo GraphQL para el Servicio */
const $GraphQL$ = (new ApolloClient({
    cache: (new InMemoryCache({
        fragments: (createFragmentRegistry(gql`
            fragment MediaContextContentEssentialData on Media {
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
                },
                identified
            }
        `))
    })),
    link: concat(
        (new ApolloLink((operation,forward) => {
            operation["setContext"](({language}:GraphQLContext) => ({
                headers: {
                    "X-CKeyP-H": import.meta.env.CkAppEnvironmentCurrentApplicationID,
                    "X-CLangP-H": language
                }
            }));return forward(operation);
        })),
        (createPersistedQueryLink({sha256,useGETForHashedQueries:true})["concat"](new HttpLink({
            uri: `${import.meta.env.CkAppEnvironmentAPIEndPointURI}/graphql`,
            useGETForQueries: true
        })))
    )
}));

export default $GraphQL$;