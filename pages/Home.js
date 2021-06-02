import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { pegarClima } from '../components/apiClima'

const Home = ({ navigation }) => {

    const [cidade, setCidade] = React.useState('');
    
    const consultar = async () => {
        const clima = await pegarClima(cidade);
        navigation.navigate('Weather', clima);
      };

    return (
        <>
        <View style ={styles.container}>
            <Text style={{fontSize: 25, }}>Cidade: </Text>
            <TextInput style={{backgroundColor: 'gray', width: 175, height: 20,}} onChangeText={(texto) => setCidade(texto)}></TextInput>
            <TouchableOpacity onPress={() => {consultar()}} style = {{}}>
            
            <Text style = {{fontSize: 25,}}>Consultar</Text>
            </TouchableOpacity>
            

        </View>
        </>
    )
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });

export default Home