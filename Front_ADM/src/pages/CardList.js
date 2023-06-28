import React from 'react';
import { View, FlatList } from 'react-native';
import Card from './Card';

const CardList = ({ lista, setLista }) => {
  const renderItem = ({ item }) => (
    <Card
      title={item.denunciaStatus}
      description={item.text}
      id={item.id}
      setLista={setLista}
    />
  );

  return (
    <View>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CardList;
