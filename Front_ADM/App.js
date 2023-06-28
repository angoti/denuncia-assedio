/*
import React from 'react';
import { SafeAreaView } from 'react-native';
import CardList from './src/pages/CardList';

const App = () => {
  return (
    <SafeAreaView>
      <CardList />
    </SafeAreaView>
  );
};

export default App;
*/

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import { logOut } from './src/screens/SignInScreen';

// @ts-ignore
export const AuthContext = createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  const initialState = {
    isLoading: true,
    userToken: null,
  };
  const [state, setState] = useState(initialState);

  const loaded = data => {
    if (data === '') {
      setState(prev => {
        return { ...prev, isLoading: false };
      });
    } else {
      setState(prev => {
        dados = {
          displayName: data.givenName + ' ' + data.familyName,
          photoURL: data.photo,
        };
        return { isLoading: false, userToken: dados };
      });
    }
  };

  const signIn = data => {
    console.log(data);
    setState(prev => {
      return { ...prev, userToken: data };

    });
  };

  const signOut = () => {
    logOut();
    setState(prev => {
      return { isLoading: true, userToken: null };
    });
  };

  return (
    <AuthContext.Provider value={{ state }}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <Stack.Screen name="Splash">
              {props => <SplashScreen {...props} loaded={loaded} />}
            </Stack.Screen>
          ) : state.userToken == null ? (
            // Usuário não autenticado
            <Stack.Screen name="SignIn">
              {props => <SignInScreen {...props} signIn={signIn} />}
            </Stack.Screen>
          ) : (
            // Usuário autenticado
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} signOut={signOut} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
