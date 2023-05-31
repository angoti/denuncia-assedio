import { createStackNavigator } from '@react-navigation/stack';

import { Complaint } from '../pages/Complaint';
import { Confirmation } from '../pages/Confirmation';
import { LogoTitle } from '../components/LogoTitle';

const Stack = createStackNavigator();

export function StackAnonima() {
  return (
    <Stack.Navigator initialRouteName="Denuncia">
      <Stack.Screen
        name="Denuncia"
        component={Complaint}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerShown: true, title:'Confirmação' }}
      />
    </Stack.Navigator>
  );
}
