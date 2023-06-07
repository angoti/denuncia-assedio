import { View, StyleSheet, Text, Button } from 'react-native';
import { createContext, useContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthContext = createContext({
  hasUser: false,
  setUser: estado => {
    hasUser = estado;
  },
});

export function NewLogin() {
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Login</Text>
      <Button title="Entrar" onPress={() => setUser(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
