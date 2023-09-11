import { StatusBar } from 'expo-status-bar';

import { useEffect, useRef, useState } from 'react';

import { Animated, StyleSheet, Text, View } from 'react-native';

export default function AnimacaoInterpolation() {

  const largura = useRef(new Animated.Value(0)).current;

  useEffect(() => {
 
   
    Animated.sequence(
    [
      Animated.timing(
      largura,
      {
       toValue: 100,
       duration: 5000,
       useNativeDriver: false,
      }
    ),

    ]
    ).start();
    
    },[]);


  const porcentagem = largura.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']   
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ 
        width: porcentagem,
        height: 25,
        backgroundColor: '#9932CC',
        justifyContent:'center'
        }}
      >

      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
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
