import React from 'react';
import {Text, ImageBackground, View, Image} from 'react-native'
import styles from './styles';

const Hero = () => {
    return (
        <ImageBackground 
        style={styles.hero}
        source={{uri: 'https://th.bing.com/th/id/R.12ea4529dde586b8ca89959c1f2a8aec?rik=lMX28nITK%2bp9HA&riu=http%3a%2f%2fpointnerd20.com.br%2fwp-content%2fuploads%2f2020%2f09%2fIMG_20200929_173951.jpg&ehk=ExJ0O73YikT3%2b2kUpb1DrlDvatnQmS2nxrwcclnCT%2fc%3d&risl=&pid=ImgRaw'}}>
        
        </ImageBackground>
    );
}

export default Hero;