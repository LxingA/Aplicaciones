/*
@author LxingA
@project CodeInk
@name Global
@date 29/03/24 06:00PM
@description Inicialización de una Aplicación Móvil
*/
import * as $Crypto$ from 'expo-crypto';
import {useEffect} from 'react';
import {configureStore,combineReducers,createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import {Provider as Redux,useSelector} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import $Application$ from './media/app';
import $Builder$ from '../util/initial';
import $Fetcher$ from '../util/fetch';
import $Language$ from '../util/i18n';
import $CallBack$,{$InitialState$} from '../util/callback';

/** Instanciar el Almacenamiento Local para el Ambito Nativo de la Aplicación */
export const $Storage$ = (new Map<string,any>());

/** Inicialización de la Obtención de Información de una Aplicación a la API */
const $Initial$ = (createAsyncThunk("api/fetch",(async () => (await $Fetcher$({
    $uri$: process.env.EXPO_PUBLIC_API_ENDPOINT,
    $cache$: true,
    $header$: {
        "X-CKeyP-H": process.env.EXPO_PUBLIC_APP_IDENTIFIED,
        "X-CSecretP-H": process.env.EXPO_PUBLIC_APP_SECRET,
        "X-CLangP-H": "es"
    },
    $method$: "GET",
    $path$: "/v1/global",
    $query$: {
        context: "service"
    }
})))));

/** Contenedor con Todos los Reducedores de las Aplicaciones */
const $Reducer$ = {
    Global: (createSlice({
        name: "global",
        initialState: $InitialState$["global"],
        reducers: $CallBack$["global"],
        extraReducers: $Builder$($Initial$,true,$Storage$)
    }))
};

/** Definición del Contenedor de los Reducedores de la Aplicación */
const $Store$ = (configureStore({
    reducer: combineReducers({
        global: $Reducer$["Global"]["reducer"]
    })
}));

/** Definición del Prototipo Raíz de los Reducedores de la Aplicación */
export type $Root$ = ReturnType<typeof $Store$.getState>;

/** Definición de la Instancia de GraphQL para las Aplicaciones */
const $GraphQL$ = (new ApolloClient({
    cache: (new InMemoryCache()),
    uri: `${process.env.EXPO_PUBLIC_API_ENDPOINT}/graphql`
}));

/** Definición de la Inicialización de la Aplicación en el Ambito de la API */
const $Default$ = () => {
    const {initial:{ready,error,message}} = useSelector(($current$:$Root$) => $current$["global"]);
    /*useEffect(() => {
        $Store$["dispatch"]($Initial$());
    },[]);*/
    return (
        <p></p>
    );
};

/** Función Esencial para la Generación de los Enlaces de los Recursos Firmadas */
export const $Asset$ = async(filename:string): Promise<string> => {
    const local = ($Storage$["get"]("ckapp-cdn-data"));
    const access_token = local["token"]["split"]("-");
    const encrypt: string = (await $Crypto$["digestStringAsync"]($Crypto$["CryptoDigestAlgorithm"]["SHA256"],`${access_token[0]["replace"](/\_/g,"-")}/${filename}${access_token[1]}`,{encoding:$Crypto$["CryptoEncoding"]["BASE64"]}));
    return `${local["endpoint"]}/${filename}?token=${encrypt["replace"](/\n/g,"")["replace"](/\+/g,"-")["replace"](/\//g,"_")["replace"](/\=/g,"")}&expires=${access_token[1]}` as string;
};

/** Definición Inicializadora para la Instancia de una Aplicación Móvil del Proyecto */
export default function $Movil$(){
    return (
        <Redux store={$Store$}>
            <ApolloProvider client={$GraphQL$}>
                <I18nextProvider i18n={$Language$}>
                    <$Default$ />
                </I18nextProvider>
            </ApolloProvider>
        </Redux>
    )
};