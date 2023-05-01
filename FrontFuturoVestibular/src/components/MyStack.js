import { createStackNavigator } from '@react-navigation/stack';

import { Register } from '../pages/Register';
import { Complaint } from '../pages/Complaint';



const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen name="Denuncia" component={Complaint} />

    </Stack.Navigator>
  );
}