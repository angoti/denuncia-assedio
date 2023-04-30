import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register }  from './src/pages/Register';
import { Complaint } from './src/pages/Complaint';


const Stack = createNativeStackNavigator();
{/*const Drawer = createDrawerNavigator();*/}

export default () => {
  
  return (
    <NavigationContainer>
       
       
      <Stack.Navigator initialRouteName="Registre">
        <Stack.Screen name="Registre" component={Register} />
        <Stack.Screen name="Denuncia" component={Complaint} />
      </Stack.Navigator>
      
{/*
      <Drawer.Navigator useLegacyImplementation initialRouteName="Registre-d">
        <Drawer.Screen name="Register-d" component={Register} />
        <Drawer.Screen name="Complaint" component={Complaint} />
      </Drawer.Navigator>
*/}

    </NavigationContainer>
  );
};