import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import CardList from '../pages/CardList';
import { View, Button, ActivityIndicator } from 'react-native';

const HomeScreen = ({ signOut }) => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    getDenuncias();
  }, []);

  const getDenuncias = async () => {
    fetch('http://denuncia-assedio.herokuapp.com/denuncias')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(res => {
        console.log(res);
        setLista(res);
      });
  };
  const { state } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, margin: 8, marginTop: 30 }}>
      {/* <CardList />
      <Text>Tela principal</Text>
      <Text>{state.userToken.displayName}</Text>
      <Image
        source={{ uri: state.userToken.photoURL }}
        style={{ width: 150, height: 150 }}
        resizeMode="contain"
      /> */}
      {lista.length == 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <CardList lista={lista} />
      )}
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
