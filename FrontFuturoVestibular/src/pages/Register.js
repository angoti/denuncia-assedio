import { View, Text, TextInput, StyleSheet } from 'react-native';

import { useForm, Controller } from 'react-hook-form';

import { TextInputMask } from 'react-native-masked-text';
import { Button } from '../components/Button';




const onSubmit = async (data) => {
  console.log(data);
  try {//lembrar de mudar o ip/endereço do servidor, que é o primeiro parâmetro da função do Javascript fetch()
    const response = await fetch('http://172.17.0.1:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Dados enviados com sucesso!');
    } else {
      alert('Erro ao enviar os dados.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao enviar os dados.');
  }
};


export function Register({ navigation }) {
  const { control, handleSubmit, formState: { erros } } = useForm({});


  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, alignSelf: 'center' }}>Cadastro Usuário</Text>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Name'
          />
        )}
      />

      <Controller
        control={control}
        name="dtBirthday"
        render={({ field: { onChange, value } }) => (
          <TextInputMask
            style={styles.input}
            type={"datetime"}
            options={{
              format: 'DD/MM/YYYY'
            }}
            onChangeText={onChange}
            value={value}
            placeholder='Data de nascimento'

          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            type={"text"}
            onChangeText={(onChange)}
            value={value}
            placeholder='Email'
          />
        )}
      />

      <Controller
        control={control}
        name="class_studant"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            maxLength={5}
            onChangeText={onChange}
            value={value}
            placeholder='Turma'
          />
        )}
      />

      <Controller
        control={control}
        name="numberPhone"
        render={({ field: { onChange, value } }) => (
          <TextInputMask
            style={styles.input}
            type={"cel-phone"}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            onChangeText={onChange}
            value={value}
            placeholder='Telefone'

          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)} />

      <Button
        title="Go to denuncia"
        onPress={() => navigation.navigate('Denuncia')}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});