import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export function Confirmation({ route }) {
  const [enviando, setEnviando] = useState(false);
  const data = route.params;

  const onSubmit_denuncia = async () => {
    console.log(data);
    setEnviando(true);
    try {
      const response = await fetch('http://10.0.2.2:8080/denuncias', {
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
    } finally {
      setEnviando(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {enviando && <ActivityIndicator size="large" color="#00ff00" />}
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Confirmação</Text>

      <View style={{ marginTop: 10 }}>
        <Text>Onde ocorreu: {data.text}</Text>
        <Text>Onde ocorreu: {data.place}</Text>
        <Text>Quando ocorreu: {data.moment}</Text>
        <Text>Nome do autor: {data.name_author}</Text>
      </View>

      <Button title="Confirmar" onPress={onSubmit_denuncia} />
    </View>
  );
}
