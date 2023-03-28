// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import StyleMain from './style/main'
import TelaInicial from './src/screen/tela-inicial/tela-inicial'

export default function App() {
  return (
    <View style={StyleMain.container}>
      <TelaInicial/>
    </View>
  );
}
