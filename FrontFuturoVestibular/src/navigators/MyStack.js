import { createStackNavigator } from '@react-navigation/stack';

import { Register } from '../pages/Register';
import { Complaint } from '../pages/Complaint';
import { ComplaintBooklet } from '../pages/ComplaintBooklet';
import { UserOption } from '../pages/UserOption';


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Tipo de denuncia'>
    
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen name="Denuncia" component={Complaint} />
      <Stack.Screen name="Cartilha de Denuncia" component={ComplaintBooklet} />
      <Stack.Screen name="Tipo de denuncia" component={UserOption} />
 



    </Stack.Navigator>
  );
}