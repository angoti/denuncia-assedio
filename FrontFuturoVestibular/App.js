import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register }  from './src/pages/Register';
import { Complaint } from './src/pages/Complaint';


const Stack = createNativeStackNavigator();

export default () => {
  
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Registre">
        <Stack.Screen name="Registre" component={Register} />
        <Stack.Screen name="Denuncia" component={Complaint} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};