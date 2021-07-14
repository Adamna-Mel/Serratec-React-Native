import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textWhite: {
        color: '#fff',
    },
    
    header: {
        position: 'absolute',
        top: 8,
        zIndex: 999,
    },

    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 70,
        textAlign: 'center',
    }
});

export default styles;