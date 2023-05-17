import { createStackNavigator } from '@react-navigation/stack';

import { Register } from '../pages/Register';
import { Complaint } from '../pages/Complaint';
import { ComplaintBooklet } from '../pages/ComplaintBooklet';






const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Cartilha de Denuncia'>
    
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen name="Denuncia" component={Complaint} />
      <Stack.Screen name="Cartilha de Denuncia" component={ComplaintBooklet} />
 



    </Stack.Navigator>
  );
}