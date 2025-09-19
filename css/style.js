import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BF99B1'
    },
    containerMain:{
        display: 'flex',
        borderRadius: '42%',
        backgroundColor: '#806074b9'
    },
    imageWoman:{
        width: 300,
        height: 400,
        borderRadius: 200,
    },
    containerGrid:{
        width: '90%',
        height: 200,
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
        backgroundColor: '#E7CAE0'
    },
    containerIcons:{
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#D77081'
    },
    textDefault:{
        color: '#444'
    }
});

export default styles;