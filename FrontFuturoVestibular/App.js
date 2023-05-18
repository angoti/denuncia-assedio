import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { MyStack } from './src/navigators/MyStack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


export default () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Menu" component={MyStack} />

      </Drawer.Navigator>
    </NavigationContainer>

  );
};

