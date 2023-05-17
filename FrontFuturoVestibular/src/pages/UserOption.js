import React from "react";
import { Text, StyleSheet, View } from 'react-native';

export function UserOption() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ATENÇÃO, </Text>
            <Text>
                Não há necessidade de se identificar, você poderá realizar a denúncia de forma anonima. 
            </Text>
            

        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        marginBottom: 10,
    },
    heading: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
});