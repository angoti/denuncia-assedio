import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from '../components/Button';

import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';


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

export function Register() {
  const { control, handleSubmit, formState: { erros } } = useForm({});


  function handleRegisterUser(data) {
    console.log(data);
  }

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
        name="cpf"
        render={({ field: { onChange, value } }) => (
          <TextInputMask
            style={styles.input}
            type={"cpf"}
            onChangeText={onChange}
            value={value}
            placeholder='CPF'

          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Email'
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
            placeholder='Phone'

          />
        )}
      />

      <Button onPress={onSubmit}/>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});