import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import { Button } from '../components/Button'

export function ComplaintBooklet({ navigation }) {
{/*
    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    }
*/}
    const handleSubmit = () => {
        console.log("ola ok")
        navigation.navigate('Tipo de denuncia');
    }


    return (
        <View style={styles.container}>
            <View style={styles.divText}>
                <Text style={styles.text}>Olá, </Text>
                
                <Text>

                    Esse aplicativo tem como finalidade o cadastro de denuncia na Instituição Futuro Pré-Vestibular.
                </Text>
                <Text style={styles.text}>A seguir serão solicitadas sobre a denuncia. </Text>

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
            </View>

            <View style={styles.buttonContainer}>
               {/* <Button title="Next" onPress={() => handleNavigation('Tipo de denuncia')} /> */}
               <Button title="Iniciar" onPress={handleSubmit} />
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
    divText: {
        marginBottom: 100,
    },

    button: {
        backgroundColor: "purple",

    },
});