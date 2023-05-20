import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';

export function ComplaintBooklet({navigation}) {

    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, </Text>
            <Text>

                Esse aplicativo tem como finalidade o cadastro de denuncia na Instituição Futuro Pré-Vestibular.
            </Text>
            <Text style={styles.text}>A seguir serão solicitadas acerca sobre a denuncia. </Text>

            <Text style={styles.heading}>INFORMAÇÕES IMPORTANTES </Text>
            <Text style={styles.listItem}>
                &bull; Não é necessário se identificar.
            </Text>
            <Text style={styles.listItem}>
                &bull; Será possivel acompanhar o andamento da sua denucia.
            </Text>
            <Text style={styles.listItem}>
                &bull; Havendo necessidade o administrador entrará em contato pelo chat.
            </Text>

            <View style={styles.buttonContainer}>
                <Button title="Next" onPress={() => handleNavigation('Tipo de denuncia')} />
            </View>
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