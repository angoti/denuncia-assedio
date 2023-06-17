import React from 'react';
import { View, FlatList } from 'react-native';
import Card from './Card';

const CardList = () => {
  const data = [
    { id: '1', title: 'Card 1', description: 'Description for Card 1' },
    { id: '2', title: 'Card 2', description: 'Description for Card 2' },
    { id: '3', title: 'Card 3', description: 'Description for Card 3' },
    // Adicione mais dados para mais cards
  ];

  const renderItem = ({ item }) => (
    <Card title={item.title} description={item.description} />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardList;
