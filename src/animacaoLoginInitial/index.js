import { StatusBar } from 'expo-status-bar';

import { useEffect, useRef, useState } from 'react';

import { Animated, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AnimetedContent2, ContentImageView, ImageBackgroundCustom } from '../animacaoLogin/styled';
import greens from '../assets/background-green.jpg';
import beachImage from '../assets/sea-beach-background.jpg';

export default function AnimacaoLoginInitial({alterViewValue}) {

  const contentAcess = useRef(new Animated.Value(-160)).current;

  useEffect(() => {

    Animated.timing(
      contentAcess,
      {
       toValue: 60,
       duration: 1000,
       useNativeDriver: false,
      }
    ).start();
    
  },[]);


  return (
    <View style={styles.container}>
        
      <Animated.View style={{ 
        flex: 1,
        width: '100%',
        backgroundColor: '#DCDCDC',
        justifyContent:'center',
        alignItems:'center',
        }}
      >
        
        <ImageBackgroundCustom source={greens} resizeMode="cover" backgroundPorcentagem={100}>

        </ImageBackgroundCustom>

        <Animated.View style={{ 
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          }}> 
          <Animated.View style={{ width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position:'absolute', 
          bottom: contentAcess
           }}>
         <TouchableOpacity style={styles.buttonLogin} onPress={() => alterViewValue(2)}>
          <Text style={{ fontSize: 22,fontWeight:'bold', textTransform: 'uppercase' }}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.buttonCriarconta}>
          <Text style={{ fontSize: 22, color:'#FFF', fontWeight:'bold', textTransform: 'uppercase' }}>Criar Conta</Text>
         </TouchableOpacity>
         </Animated.View>
        </Animated.View> 
        
       
      </Animated.View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    padding: 8,
    fontStyle:'italic',
    color: "#000",
    textAlign:'center'
  },
  buttonLogin: {
   width:'90%',
   height: 60,
   borderWidth: 2,
   borderColor: '#FFFF',
   margin: 8,
   borderRadius: 30,
   backgroundColor: '#FFFF',
   justifyContent:'center',
   alignItems:'center',
  }, 
  buttonCriarconta: {
    width:'90%',
    height: 60,
    borderWidth: 2,
    borderColor: '#1E90FF',
    backgroundColor: '#1E90FF',
    margin: 8,
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
  }

});


