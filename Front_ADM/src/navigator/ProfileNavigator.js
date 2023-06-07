import { createStackNavigator } from '@react-navigation/stack';
import { NewLogin } from '../pages/NewLogin';

const Stack = createStackNavigator();

export const ProfileNavigator = ({ renderHeaderButton }) => {
  const { setUser } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => renderHeaderButton(setUser), // Adiciona o botão no cabeçalho
      }}>
      <Stack.Screen name="NewLogin" component={NewLogin} />
    </Stack.Navigator>
  );
};
