import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackAnonima } from './src/navigators/StackAnonima';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ComplaintBooklet } from './src/pages/ComplaintBooklet';
import { Register } from './src/pages/Register';
import { LogoTitle } from './src/components/LogoTitle';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerTitle: 'App Denuncia' }}>
        <Drawer.Group
          screenOptions={{ headerStyle: { backgroundColor: '#ff0'}, title:'Future App' }}>
          <Drawer.Screen
            name="Cartilha de Denuncia"
            component={ComplaintBooklet}
            options={{ title: 'Cartilha de Denuncia' }}
          />
          {/* <Drawer.Screen
            name="Registro"
            component={Register}
            options={{
              title: 'Cadastrar denunciante',
            }}
          /> */}
          <Drawer.Screen
            name="StackAnonima"
            component={StackAnonima}
            options={{
              title: 'Denuncia anônima',
            }}
          />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
