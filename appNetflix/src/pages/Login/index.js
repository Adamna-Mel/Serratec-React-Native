import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Login  = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function logar() {
        const usuario = {
          email, senha
        }
        await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
      }

    return (
        <View style={styles.bgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>

            <View>
                <TextInput
                label="Email"
                mode= "flat"
                style={styles.marginBottom}
                value={email}
                onChangeText={text => setEmail(text)}
                />

                <TextInput
                label="Senha"
                mode= "flat"
                style={styles.marginBottom}
                secureTextEntry
                value={senha}
                onChangeText={text => setSenha(text)}
                />
                
               <Button  
                mode="contained" 
                style={styles.marginBottom}
                onPress={(logar) => {
                    navigation.navigate('Home')
                }}>
                Entrar
             </Button>

             <Button  
                style={styles.marginBottom}
                onPress={() => console.log('Pressed')}
                theme={{colors: {primary: '#fff'}}}>
                Recuperar Senha
             </Button>

             <Text style={styles.textSmall}>
                 O acesso está protegido pelo Google reCAPTCHA para garantir que você
                 não é um robô. Saiba mais.
             </Text>
          </View>  
        </View>        
    );     
}

export default Login;