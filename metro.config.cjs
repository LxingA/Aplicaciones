/*
@author LxingA
@project CodeInk
@name Global
@date 09/03/24 05:30PM
@description Definición de la Configuración del Metro para Expo (React Native)
*//** @type {import('expo/metro-config').MetroConfig} */
const {getDefaultConfig} = require("expo/metro-config");
const config = (getDefaultConfig(__dirname));
module.exports = config;