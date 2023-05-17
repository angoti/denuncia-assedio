import { createStackNavigator } from '@react-navigation/stack';

import { Register } from '../pages/Register';
import { Complaint } from '../pages/Complaint';
import { Teste } from '../pages/Teste';






const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Registro'>
    
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen name="Denuncia" component={Complaint} />
 



    </Stack.Navigator>
  );
}