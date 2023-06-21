import React from 'react';
import { View, FlatList } from 'react-native';
import Card from './Card';

const CardList = ({ lista }) => {
  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1' },
    { id: '2', title: 'Card 2', description: 'Description for Card 2' },
    { id: '3', title: 'Card 3', description: 'Description for Card 3' },
    // Adicione mais dados para mais cards
  ];

  const renderItem = ({ item }) => (
    <Card title={item.denunciaStatus} description={item.text} />
  );

  return (
    <View>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardList;
