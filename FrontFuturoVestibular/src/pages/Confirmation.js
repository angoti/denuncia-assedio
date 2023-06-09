import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from '../components/Button';
import { useState } from 'react';

export function Confirmation({ route }) {
  const [enviando, setEnviando] = useState(false);
  const data = route.params;

  const onSubmit_denuncia = async () => {
    console.log(data);
    setEnviando(true);
    try {
      // const response = await fetch('http://10.0.2.2:8080/denuncias', {
      const response = await fetch(
        'http://denuncia-assedio.herokuapp.com/denuncias',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        alert('Dados enviados com sucesso!');
      } else {
        console.error('Erro:', response);
        alert('Erro ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro: ' + error);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {enviando ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
            Descrição do fato:
          </Text>
          <Text>{data.text}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
            Lugar do ocorrido:{' '}
          </Text>
          <Text>{data.place}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
            Hora aproximada:{' '}
          </Text>
          <Text>{data.moment}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
            Nome do acusado:{' '}
          </Text>
          <Text>{data.name_author}</Text>
        </View>
      )}

      <View style={styles.viewButton}>
        <Button title="Concluir" onPress={onSubmit_denuncia} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    marginTop: 75,
  },
});
