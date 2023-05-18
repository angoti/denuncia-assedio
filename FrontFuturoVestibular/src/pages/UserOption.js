import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';


export function UserOption({ navigation }) {

    const handleSubmit = () => {
        navigation.navigate('Registro');
    }

    const _handleSubmit = () => {
        navigation.navigate('Denuncia');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>ATENÇÃO, </Text>
                <Text>
                    Não há necessidade de se identificar, a denuncia poderá ser realizada de forma anonima.
                </Text>
            </View>
            <View style={styles.containerButton} >
                <View style={styles.buttonContainer}>
                    <Button title="Anonima" onPress={_handleSubmit}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Identificada" onPress={handleSubmit} />
                </View>
            </View>


        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    containerText: {
        marginBottom: 150,
    },
    text: {
        marginBottom: 10,
    },
    heading: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    heading: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginHorizontal: 10,
    }


});