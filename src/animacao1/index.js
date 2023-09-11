import { StatusBar } from 'expo-status-bar';

import { useEffect, useRef, useState } from 'react';

import { Animated, StyleSheet, Text, View } from 'react-native';

export default function Animacao1() {

  //const [largura, setLargura] = useState(150);
  const largura = useRef(new Animated.Value(120)).current;
  //const [altura, setAltura] = useState(50);  
  const altura = useRef(new Animated.Value(60)).current; 

  useEffect(() => {
 
    Animated.timing(
      largura,
      {
       toValue: 300,
       duration: 3000,
       useNativeDriver: false,
      }
    ).start();
    
    },[]);



  return (
    <View style={styles.container}>
      <Animated.View style={{ 
        width: largura,
        height: altura,
        backgroundColor: '#9932CC',
        justifyContent:'center'
        }}
      >
        <Text style={styles.title}>Animações</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    padding: 8,
    fontStyle:'italic',
    color: "#000",
    textAlign:'center'
  }

});
