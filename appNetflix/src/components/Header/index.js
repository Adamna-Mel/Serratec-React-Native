import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
const Header = () => {
    return (
        <LinearGradient style={styles.header} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)']}>
            <View style={styles.headerSafeAreaView} >
                {/*<Image source= {{uri: 'https://cdn-images-1.medium.com/fit/c/200/200/1*ty4NvNrGg4ReETxqU2N3Og.png}} />*/}
                <TouchableOpacity>
                    <Text style= {styles.textWhite}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.textWhite}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.textWhite}>Minha Lista</Text>
                </TouchableOpacity>
            </View>
        
        </LinearGradient>
    );
}

export default Header;