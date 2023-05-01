import { createDrawerNavigator } from '@react-navigation/drawer';

import { Complaint } from "../pages/Complaint";
import { Register } from "../pages/Register";


const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Registro" component={Register} />
      <Drawer.Screen name="Denuncia" component={Complaint} />

    </Drawer.Navigator>
  );
}