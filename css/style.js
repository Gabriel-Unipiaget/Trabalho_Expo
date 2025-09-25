import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9F6F2'
    },
    imageWoman:{
        width: 300,
        height: 400,
        borderRadius: 130,
    },
    textTitulo: {
        color: '#000',
        fontSize: 18,
    },
    containerGrid:{
        width: '90%',
        height: 150,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerItem: {
        width: '45%',
        height: '95%',
        display: 'flex',
        gap:5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#2B2016'
    },
    containerIcons:{
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#6A5137'
    },
    textDefault:{
        color: '#F9F6F2'
    }
});

export default styles;