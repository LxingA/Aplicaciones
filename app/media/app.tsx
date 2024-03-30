/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 28/03/24 11:30PM
@description Inicialización de la Aplicación Móvil del Proyecto
*/
import {Text,View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

/** Inicialización de la Aplicación Móvil del Proyecto */
export default function Mobile(){
    return (
        <View>
            <Text>
                Inicialización
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
};