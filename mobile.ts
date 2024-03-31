/*
@author LxingA
@project CodeInk
@name Global
@date 28/03/24 11:30PM
@description Configuración Inicial para la Integración de Expo para las Aplicaciones Móviles del Proyecto
*/
import $Register$ from 'expo/build/launch/registerRootComponent';
import $Movil$ from './app/mobile';
$Register$($Movil$);