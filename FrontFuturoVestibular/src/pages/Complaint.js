import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Button } from "../components/Button"
import {useForm, Controller} from 'react-hook-form';
import {TextInputMask} from 'react-native-masked-text';

export function Complaint({navigation, route}) {
  const {control, handleSubmit} = useForm({});

  return (
    <View style={{padding: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 24, alignSelf: 'center'}}>
        Informe o acontecido
      </Text>

      <Controller
        control={control}
        name="text"
        render={({field: {onChange, value}}) => (
          <TextInput
            multiline
            style={[styles.input, {height: 120}]}
            onChangeText={onChange}
            value={value}
            placeholder="Informe o acontecido"
          />
        )}
      />
      <Controller
        control={control}
        name="place"
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Lugar onde aconteceu"
          />
        )}
      />

      <Controller
        control={control}
        name="moment"
        render={({field: {onChange, value}}) => (
          <TextInputMask
            style={styles.input}
            type={'datetime'}
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
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Nome do acusado"
          />
        )}
      />

      <Button
        title="Submeter"
        onPress={handleSubmit(data =>
          navigation.navigate('Confirmation', data),
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
  },
});
