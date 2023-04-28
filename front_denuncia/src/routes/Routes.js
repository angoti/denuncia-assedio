import { createStackNavigator } from 'react-navigation-stack';

import { Complaint } from '../pages/Complaint';
import { Register } from '../pages/Register';

const MainStackNavigation = createStackNavigator({
    Register: { screen: Register },
    Complaint:  {screen: Complaint },
    
});

export default MainStackNavigation;