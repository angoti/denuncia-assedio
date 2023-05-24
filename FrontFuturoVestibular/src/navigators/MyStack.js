import { createStackNavigator } from '@react-navigation/stack';

import { Register } from '../pages/Register';
import { Complaint } from '../pages/Complaint';
import { ComplaintBooklet } from '../pages/ComplaintBooklet';
import { UserOption } from '../pages/UserOption';
import { Confirmation } from '../pages/Confirmation';
import { LogoTitle } from '../components/LogoTitle';


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Cartilha de Denuncia'>
      <Stack.Screen
        name="Cartilha de Denuncia"
        component={ComplaintBooklet}
        options={{
          headerTitle: () => <LogoTitle />,
          headerShown: false // Adicione esta linha para ocultar o cabeçalho
        }}
      />
      <Stack.Screen name="Tipo de denuncia" component={UserOption} options={{
        headerTitle: (props) => <LogoTitle {...props} />,
       
      }} />
      <Stack.Screen name="Registro" component={Register} options={{
        headerTitle: (props) => <LogoTitle {...props} />,
        
      }} />
      <Stack.Screen name="Denuncia" component={Complaint} options={{
        headerTitle: (props) => <LogoTitle {...props} />,
        
      }} />
      <Stack.Screen name="Confirmation" component={Confirmation} options={{
        headerTitle: (props) => <LogoTitle {...props} />,
        
      }} />
    </Stack.Navigator>
  );
}
