import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '../components/Button';

import { useForm, Controller } from 'react-hook-form';

import { TextInputMask } from 'react-native-masked-text';

const onSubmit_denuncia = async (data) => {
  console.log(data);
  try {
    const response = await fetch('http://172.17.0.1:8080/denuncias', {
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

export function Complaint() {
  const { control, handleSubmit, formState: { erros } } = useForm({});




  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontWeight: 'bold', fontSize: 24, alignSelf: 'center' }}>Informe o acontecido</Text>

      <Controller
        control={control}
        name="text"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, { height: 120 }]}
            onChangeText={onChange}
            value={value}
            placeholder='Informe o acontecido'
          />
        )}
      />
      <Controller
        control={control}
        name="place"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Lugar onde aconteceu'
          />
        )}
      />

      <Controller
        control={control}
        name="moment"
        render={({ field: { onChange, value } }) => (
          <TextInputMask
            style={styles.input}
            type={"datetime"}
            options={{
              format: 'DD/MM/YYYY HH:mm',
            }}
            onChangeText={onChange}
            value={value}
            placeholder="DD/MM/YYYY HH:mm"

          />
        )}
      />

      <Controller
        control={control}
        name="name_author"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Nome do agressor / Autor'
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit_denuncia)} />

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

