import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react';

export function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                maxLength={30}
                onChangeText={(text) => setName(text)}
                value={user}
                placeholder='E-mail'
            />
            {errors.user && <Text style={styles.error}>{errors.user}</Text>}

            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={password}
                placeholder='Senha'
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <Button title="Submit"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 100,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      alignSelf: 'center',
      marginBottom: 20,
    },
    input: {
      height: 40,
      marginVertical: 8,
      borderWidth: 1,
      padding: 10,
    },
    error: {
      color: 'red',
      marginTop: 5,
    },
  });
  
