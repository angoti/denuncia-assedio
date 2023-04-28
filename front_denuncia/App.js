import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Register } from './src/pages/Register';
import { Complaint } from './src/pages/Complaint';

import MainStackNavigation from './src/routes/Routes';

const AppContainer = createAppContainer(MainStackNavigation);

export default () => {
  return (
    <View>
     {/* <Complaint/>*/}
     {/*<Register /> */}
    <AppContainer/>

    </View>
  );
};