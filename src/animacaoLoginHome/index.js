import { useState } from "react";

import { Animated, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AnimacaoLogin from "../animacaoLogin";
import AnimacaoLoginInitial from "../animacaoLoginInitial";



export default function LoginHome() {
    
    const [viewAcess, setViewAcess] = useState(1);

    function updateView(value) {
     setViewAcess(value);
    }

    return (
      <View style={styles.container}>
        { (viewAcess == 1) ? <AnimacaoLoginInitial alterViewValue={(value) => updateView(value)} /> : <AnimacaoLogin alterViewValue={(value) => updateView(value)} /> }
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
  });
  