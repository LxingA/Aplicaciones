/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 28/03/24 11:30PM
@description Inicialización de la Aplicación Móvil del Proyecto
*/
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {PaperProvider,Appbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import type {MaterialBottomTabNavigationOptions} from '@react-navigation/material-bottom-tabs';
import type {$Root$} from '../mobile';
import $Icon$ from 'react-native-vector-icons/MaterialCommunityIcons';
import $ViewHome$ from './view';
import $ViewContent$ from './view/content';

/** Definición de la Interfaz Global para la Navegación de la Aplicación */
export type Navigator = {
    /** Vista Principal de la Aplicación */
    ViewMain: {},
    /** Vista para Mostrar las Categorías de la Aplicación */
    ViewContent: {}
};

/** Instancia del Rutador Nativo para la Aplicación Móvil e Inicialización */
export default function Mobile(){
    const {t} = useTranslation();
    /** Contenedor con la Información de Navegación de la Aplicación */
    const Navigator: {
        /** Nombre Identificador del Enlace de Navegación */
        name: keyof Navigator,
        /** Referencía al Componente JSX para el Renderizado del Enlace de Navegación */
        screen: any,
        /** Objeto con Configuración Adicional para el Enlace de Navegación */
        option?: MaterialBottomTabNavigationOptions,
        /** Referencia al Nombre del Icono para Mostrar en el Enlace de Navegación */
        icon: string
    }[] = [
        {
            name: "ViewMain",
            screen: $ViewHome$,
            option: {
                title: t("NavBarLinkHomeLabel")
            },
            icon: "home"
        },
        {
            name: "ViewContent",
            screen: $ViewContent$,
            option: {
                title: t("NavBarLinkContentLabel")
            },
            icon: "library-shelves"
        }
    ];
    const {name,project:{alternative}} = useSelector(($c$:$Root$) => $c$["global"]);
    const NavBar = (createMaterialBottomTabNavigator<Navigator>());
    return (
        <PaperProvider theme={{dark:true}}>
            <Appbar.Header mode="small" elevated>
                <Appbar.Content title={`${alternative[2]} ${name}`}/>
                <Appbar.Action icon="magnify"/>
                <Appbar.Action icon="cog"/>
            </Appbar.Header>
            <NavigationContainer>
                <NavBar.Navigator initialRouteName="ViewMain" screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => {
                        let name: string = "";
                        Navigator["forEach"](({icon,name:original}) => {
                            if(route.name == original) name = icon;
                        });return (
                            <$Icon$ {...{color,name}} size={22}/>
                        );
                    },
                    headerShown: false
                })}>
                    {Navigator["map"](({name,screen,option},$iterator$) => (
                        <NavBar.Screen key={$iterator$} component={screen} options={option} {...{name}}/>
                    ))}
                </NavBar.Navigator>
            </NavigationContainer>
            <StatusBar style="auto"/>
        </PaperProvider>
    );
};