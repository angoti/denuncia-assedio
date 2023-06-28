import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import CardList from '../pages/CardList';
import { View, Button, ActivityIndicator } from 'react-native';
import { getDenuncias } from '../services/ApiBackEnd';

const HomeScreen = ({ signOut }) => {
  const [lista, setLista] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      getDenuncias(setLista);
    }, 5 * 1000)
    return () => {
      clearInterval(interval)
    }
  }, []);

  const { state } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, margin: 8, marginTop: 30 }}>
      {lista == null ? (
        <ActivityIndicator size="large" />
      ) : (
        <CardList lista={lista} setLista={setLista} />
      )}
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
