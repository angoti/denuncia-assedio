import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  class_studant: Yup.string().required('Turma é obrigatória'),
  numberPhone: Yup.string().required('Número de telefone é obrigatório'),
});

export function Teste({ navigation }) {
  const handleSubmit = (values) => {
    console.log(values);
    // Restante do código para envio do formulário
    // ...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Usuário</Text>

      <Formik
        initialValues={{ name: '', email: '', class_studant: '', numberPhone: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder='Nome'
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder='Email'
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('class_studant')}
              onBlur={handleBlur('class_studant')}
              value={values.class_studant}
              placeholder='Turma'
            />
            {touched.class_studant && errors.class_studant && <Text style={styles.error}>{errors.class_studant}</Text>}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('numberPhone')}
              onBlur={handleBlur('numberPhone')}
              value={values.numberPhone}
              placeholder='Telefone'
            />
            {touched.numberPhone && errors.numberPhone && <Text style={styles.error}>{errors.numberPhone}</Text>}

            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

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
