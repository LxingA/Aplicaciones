/*
@author LxingA
@project CodeInk
@name Global
@date 29/03/24 06:00PM
@description Inicialización de una Aplicación Móvil
*/
import {useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import {configureStore,combineReducers,createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import {Provider as Redux,useSelector} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
import $Application$ from './media/app';
import $Builder$ from '../util/initial';
import $Fetcher$ from '../util/fetch';
import type {Global as GlobalPrototype} from '../types/reducer';
import type {ImageSource} from 'expo-image';

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
        initialState: ({
            name: "Aplicación Predeterminada",
            language: "es",
            slogan: "Una Simple Aplicación Predeterminada",
            description: "Inicialización del Prototipo de una Aplicación Predeterminada",
            version: "1.0.0",
            identified: "ckmobileapp-default",
            project: {
                name: "Proyecto Predeterminado",
                telephone: "+528100000000",
                description: "Esto es una descripción respecto al Proyecto Predeterminado de la Aplicación",
                mail: "default@socasf.net"
            },
            dark: false,
            initial: {
                ready: false,
                error: false
            }
        } as GlobalPrototype),
        reducers: {},
        extraReducers: $Builder$($Initial$,true)
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

/** Plantilla Predeterminada para la Inicialización de la Aplicación */
const $Template$ = ({icon,message,background}:{
    /** Definir el Icono Predeterminado para la Vista */
    icon: ImageSource,
    /** Texto a Mostrar en la Vista Predeterminada */
    message?: string,
    /** Color de Fondo para la Vista Predeterminada */
    background: string
}) => {

    const $Style$ = StyleSheet["create"]({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: background
        },
        icon: {
            width: 100,
            height: 100
        },
        text: {
            textAlign: "center",
            marginTop: 15,
            width: "100%"
        }
    });return (
        <View style={$Style$["container"]}>
            <Image style={$Style$["icon"]} source={icon}/>
            <Text style={$Style$["text"]}>
                {message ?? "Error Desconocido"}
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
};

/** Definición de la Inicialización de la Aplicación en el Ambito de la API */
const $Default$ = () => {
    const {initial:{ready,error,message}} = useSelector(($current$:$Root$) => $current$["global"]);
    useEffect(() => {
        $Store$["dispatch"]($Initial$());
    },[]);
    return error ? (
        <$Template$ background="red" icon={require("../public/default_error_mobile.png")} {...{message}}/>
    ) : (!ready ? (
        <$Template$ background="white" icon={require("../public/default_loading_mobile.png")} message="Cargando la Aplicación..."/>
    ) : (
        <$Application$ />
    ));
};

/** Definición Inicializadora para la Instancia de una Aplicación Móvil del Proyecto */
export default function $Movil$(){
    return (
        <Redux store={$Store$}>
            <ApolloProvider client={$GraphQL$}>
                <$Default$ />
            </ApolloProvider>
        </Redux>
    )
};