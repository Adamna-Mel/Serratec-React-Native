import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PaginaFake = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Página de mentirinha! hihi :)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default PaginaFake;