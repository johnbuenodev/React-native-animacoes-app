import { StatusBar } from 'expo-status-bar';

import { useEffect, useRef, useState } from 'react';

import { Animated, StyleSheet, Text, View } from 'react-native';

export default function AnimacaoInfinita() {

  const largura = useRef(new Animated.Value(130)).current;

  useEffect(() => {
 
    Animated.loop(
    Animated.sequence(
    [
      Animated.timing(
      largura,
      {
       toValue: 380,
       duration: 3000,
       useNativeDriver: false,
      }
    ),
    Animated.timing(
        largura,
        {
         toValue: 130,
         duration: 3000,
         useNativeDriver: false,
        }
    )
    ]
    )
 
    ).start();
    
    },[]);



  return (
    <View style={styles.container}>
      <Animated.View style={{ 
        width: largura,
        height: 60,
        backgroundColor: '#9932CC',
        justifyContent:'center'
        }}
      >
        <Text style={styles.title}>Carregando</Text>
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
    width: '100%'
  },
  title: {
    fontSize: 22,
    padding: 8,
    fontStyle:'italic',
    color: "#000",
    textAlign:'center'
  }

});
