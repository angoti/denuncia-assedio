import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MyStack } from './src/components/MyStack';


const Stack = createNativeStackNavigator();
{/*const Drawer = createDrawerNavigator();*/ }

export default () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};