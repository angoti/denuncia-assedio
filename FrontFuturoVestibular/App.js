import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { MyStack } from './src/components/MyStack';
import { MyDrawer } from './src/components/MyDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MyDrawer} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};