import { ActivityIndicator, View } from 'react-native';
import { getCurrentUserInfo } from './SignInScreen';

const SplashScreen = ({ loaded }) => {
  getCurrentUserInfo().then(user => {
    if (user != null) {
      console.log(user);
      loaded(user.user);
    } else loaded('');
  });

  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
