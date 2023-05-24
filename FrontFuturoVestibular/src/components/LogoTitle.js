import { Image } from 'react-native';




export function LogoTitle() {
return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../access/img/logo.png')}
    />
  );
}

