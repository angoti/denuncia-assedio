import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

export const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [class_studant, setClassStudant] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let formErrors = {};

    if (!name) {
      formErrors.name = 'Nome é obrigatório';
    }

    if (!email) {
      formErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Email inválido';
    }

    if (!class_studant) {
      formErrors.class_studant = 'Turma é obrigatória';
    }

    if (!numberPhone) {
      formErrors.numberPhone = 'Número de telefone é obrigatório';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Restante do código para envio do formulário
      console.log('Formulário válido. Dados enviados:', { name, email, class_studant, numberPhone });
      navigation.navigate('Denuncia');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Usuário</Text>

      <TextInput
        style={styles.input}
        maxLength={30}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder='Nome'
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder='Email'
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        maxLength={5}
        onChangeText={(text) => setClassStudant(text)}
        value={class_studant}
        placeholder='Turma'
      />
      {errors.class_studant && <Text style={styles.error}>{errors.class_studant}</Text>}

      <TextInputMask
        style={styles.input}
        type={"cel-phone"}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        onChangeText={(text) => setNumberPhone(text)}
        value={numberPhone}
        placeholder='Telefone'
      />
      {errors.numberPhone && <Text style={styles.error}>{errors.numberPhone}</Text>}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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


