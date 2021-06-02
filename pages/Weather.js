import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity,ImageBackground } from 'react-native'
//import  from '../components/apiClima'

const Weather = ({navigation, route}) => {
    
    const pegarImagemBackground = ({route}) => {
        //let TesteIMG = '';
        if (route.params.descricao == 'Sunny') {
            TesteIMG = require('../assets/sunnySky.jpg')
        } else if (route.params.descricao == 'Partly Cloudy') {
            TesteIMG = require('../assets/parcialSky.jpg')
        }
    
    }
    return (
        <>
        

            <View style = {styles.container}>
            <ImageBackground source ={pegarImagemBackground.TesteIMG} style={{flex: 1}} imageStyle ={{flex: 1, resizeMode: 'cover', width: null, height: null}} />
            

            <View style={styles.corpo}>
                <View style = {styles.cardsSuperior}>
                    <View style = {styles.climaHoje}>
                        <Text style = {styles.textoParametrosDia}>Hoje</Text>
                        <Text style = {styles.textoParametros}>Temperatura: {route.params.temperatura}</Text>
                        <Text style = {styles.textoParametros}>Vento: {route.params.vento}</Text>
                        <Text style = {styles.textoParametros}>Clima: {route.params.descricao}</Text>
                    </View>
                </View>
                <View style={styles.linha}></View>
                <View style = {styles.cardsInferior}>
                    <View style ={styles.climaPrevisao1}>
                        <Text style = {styles.textoParametrosDia}>Amanhã</Text>
                        <Text style = {styles.textoParametrosCard}>Temperatura: {route.params.previsaoTemperatura1}</Text>
                        <Text style = {styles.textoParametrosCard}>Vento: {route.params.previsaoVento1}</Text>
                    </View>

                    <View style ={styles.climaPrevisao2}>
                        <Text style = {styles.textoParametrosDia}>Depois de amanhã</Text>
                        <Text style = {styles.textoParametrosCard}>Temperatura: {route.params.previsaoTemperatura2}</Text>
                        <Text style = {styles.textoParametrosCard}>Vento: {route.params.previsaoVento2}</Text>
                    </View>
                
                </View>

                <View style={styles.linha}></View>
                {/*}<TouchableOpacity onPress={() => {navigation.goBack()}} style ={styles.touchBtn}>
                    <Text style = {styles.touchBtnTexto}> Voltar </Text>

    </TouchableOpacity>*/}
                <View style={styles.button}>
                    <Button title="Voltar" onPress={() => {navigation.goBack()}}
                    />
                </View>
            </View>

            </View>
        
        </>
    );
    
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      
    },
    button: {
      padding: 10,
    },
    corpo: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        top: -250,

    },
    climaHoje: {
        borderRadius: 14,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        width: 325,

    },
    textoParametros: {
        fontSize: 14,
        color: 'white',
        opacity: 0.75,
        fontWeight: 600,
        margin: 8,
        padding: 4,
    },
    textoParametrosCard: {
        fontSize: 14,
        color: 'white',
        opacity: 0.75,
        fontWeight: 600,
        margin: 8,
        padding: 4,
    },
    textoParametrosDia: {
        textTransform: 'uppercase',
        fontSize: 14,
        color: 'white',
        fontWeight: 800,
        margin: 3,
        padding: 1,
    },
    cardsSuperior: {
        alignItems: 'center'

    },
    cardsInferior: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 25,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',

    },
    climaPrevisao1: {
        borderRadius: 14,
        backgroundColor: 'red',
        alignItems: 'center',
        //justifyContent: 'center',
        fontSize: 15,

    },
    climaPrevisao2 : {
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        //justifyContent: 'center',
        fontSize: 10,


    },
    linha: {
        borderWidth: 0.08,
        borderColor: 'black',
        margin: 10,
        width: '100%'

    },
    


  });

export default Weather;