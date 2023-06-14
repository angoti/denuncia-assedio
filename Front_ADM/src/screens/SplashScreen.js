import {ActivityIndicator, View} from 'react-native';
import {getCurrentUserInfo} from './SignInScreen';


const SplashScreen = ({loaded}) => {
  getCurrentUserInfo().then(user => {
    loaded(user);
  });

  return (
    <View>
      <ActivityIndicator size="large" />     
    </View>
  );
};


export default SplashScreen;