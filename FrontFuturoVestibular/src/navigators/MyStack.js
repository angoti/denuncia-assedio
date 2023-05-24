import { createStackNavigator } from '@react-navigation/stack';

import { Register } from '../pages/Register';
import { Complaint } from '../pages/Complaint';
import { ComplaintBooklet } from '../pages/ComplaintBooklet';
import { UserOption } from '../pages/UserOption';
import { Confirmation } from '../pages/Confirmation';


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Cartilha de Denuncia'>
      <Stack.Screen name="Cartilha de Denuncia" component={ComplaintBooklet} />
      <Stack.Screen name="Tipo de denuncia" component={UserOption} />
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen name="Denuncia" component={Complaint} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
}