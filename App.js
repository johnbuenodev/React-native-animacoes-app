import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import Animacao1 from './src/animacao1';
import Animacao2 from './src/animacao2';
import Animacao3 from './src/animacao3';
import Animacao4 from './src/animacao4';
import AnimacaoInfinita from './src/animacaoInfinita';
import AnimacaoInterpolation from './src/animacaoInterpolation';
import AnimacaoLogin from './src/animacaoLogin';
import LoginHome from './src/animacaoLoginHome';
import AnimacaoLoginInitial from './src/animacaoLoginInitial';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginHome /> */}
      <AnimacaoInterpolation /> 
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
