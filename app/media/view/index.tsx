/*
@author LxingA
@project CodeInk Apps
@name SocASF Media
@date 30/03/24 05:30PM
@description Vista Predeterminada para la Aplicación
*/
import {useEffect,useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import {Text,Button} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {$Asset$} from '../../mobile';
import type {$Root$} from '../../mobile';
import type {Navigator} from '../app';
import type {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import $SprintF$ from '../../../util/sprintf';

/** Vista Predeterminada para la Aplicación */
export default function Home({navigation}:MaterialBottomTabScreenProps<Navigator,"ViewMain">){
    const [cover,setCover] = useState<string>();
    const {project:{name}} = useSelector(($c$:$Root$) => $c$["global"]);
    const {t} = useTranslation();
    useEffect(() => {
        (async() => {
            const $defineURL$ = (await $Asset$("background/home_page_header.webp"));
            setCover($defineURL$);
        })();
    },[]);
    return (
        <View style={$Style$["container"]}>
            {cover && (
                <Image style={$Style$["image"]} source={{uri:cover}}/>
            )}
            <Text variant="displayLarge" style={{marginBottom:5}}>
                {t("ViewIndexTitleText")}
            </Text>
            <Text variant="bodyLarge">
                {$SprintF$(t("ViewIndexDescriptionText"),{
                    author: name,
                    year: (new Date())["getFullYear"]()
                })}
            </Text>
            <View style={$Style$["buttonContainer"]}>
                <Button mode="elevated" style={$Style$["buttonStyle"]} onPress={() => navigation["navigate"]("ViewContent",{})}>
                    Acceder a la Multimedia
                </Button>
            </View>
        </View>
    );
};

/** Definición de los Estilos Locales de la Vista */
const $Style$ = (StyleSheet["create"]({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 400,
        height: 300,
        marginBottom: 15,
        borderRadius: 10
    },
    buttonContainer: {
        marginTop: 15,
        flexDirection: "row"
    },
    buttonStyle: {
        height: 38
    }
}));