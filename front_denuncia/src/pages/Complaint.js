import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import {useForm, Controller } from 'react-hook-form';

import { TextInputMask } from 'react-native-masked-text';

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
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder='Relate o acontecido'
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
            placeholder='Relate o acontecido'
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
              format: 'DD/MM/YYYY'
            }}
            onChangeText={onChange}
            value={value}
            placeholder='Data e hora aproximada do fato'

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

