import { NavigationContainer } from '@react-navigation/native';

import { MyStack } from './src/components/MyStack';
import { MyDrawer } from './src/components/MyDrawer';

{/*
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
*/ }

export default () => {

  return (
    <NavigationContainer>
      {/*<MyDrawer />*/}
      <MyStack />
    </NavigationContainer>
  );
};