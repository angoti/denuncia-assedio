import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Button(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.teste}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "purple",
        padding: 20,
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
})