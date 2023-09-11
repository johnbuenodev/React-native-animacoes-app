import Ionicons from '@expo/vector-icons/Ionicons';

import { StatusBar } from 'expo-status-bar';

import { useEffect, useRef, useState } from 'react';

import { Animated, ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import greens from '../assets/background-green.jpg';
import beachImage from '../assets/sea-beach-background.jpg';

import { AnimetedContent2, ButtonAcessar, ContentImageView, FormularioLogin, ImageBackgroundCustom } from './styled';

export default function AnimacaoLogin({alterViewValue}) {

  //const [largura, setLargura] = useState(150);
  const largura = useRef(new Animated.Value(120)).current;
  //const [altura, setAltura] = useState(50);  
  const altura = useRef(new Animated.Value(60)).current; 

  const [backgroundColorCustom, setBackgroundColorCustom] = useState(''); //'#DCDCDC'
  const opacityCustom = useRef(new Animated.Value(1)).current;

  const ContentImageViewValue = useRef(new Animated.Value(2.8)).current; //1
  // const content1 = useRef(new Animated.Value(2)).current;
  const AnimetedContent2 = useRef(new Animated.Value(1)).current;
  const contentImage = useRef(new Animated.Value(1)).current;

  const [borderActive, setBorderActive] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
 
    Animated.timing(
      ContentImageViewValue,
      {
       toValue: 1,
       duration: 1500,
       useNativeDriver: false,
      }
    ).start();
    
    },[]);

    function returnAcess() {

      setBorderActive(false);

      Animated.parallel(
      [
      Animated.timing(
        ContentImageViewValue,
        {
         toValue: 1,
         duration: 1000,
         useNativeDriver: false,
        }
      ),
      Animated.timing(
        AnimetedContent2,
        {
         toValue: 0,
         duration: 1000,
         useNativeDriver: false,
        }
      )
      ]
      ).start();

      setTimeout(() => {
        alterViewValue(1);
      },1000);

    } 

    //onPress={() => alterViewValue(1)}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
    <View style={styles.container}>
    
      <Animated.View style={{ 
        flex: 1,
        width: '100%',
        backgroundColor: '#DCDCDC',
        justifyContent:'center',
        alignItems:'center',
        }}
      >

        <Animated.View style={{ 
          flex: ContentImageViewValue,
          width: '100%',
          overflow: 'hidden',
          borderBottomLeftRadius: borderActive ? 60 : 0,
          borderBottomRightRadius: borderActive ? 60 : 0,          
          }}>
         <ImageBackgroundCustom source={greens} resizeMode="cover" backgroundPorcentagem={100}>
         <Ionicons name="arrow-back-outline" onPress={() => returnAcess()} style={{ position:"absolute", top: 70, marginLeft: 16 }} size={32} color="#FFFF" />

         </ImageBackgroundCustom> 
        </Animated.View>


        <Animated.View style={{ 
          flex: AnimetedContent2,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColorcolor: '#DCDCDC', 
          }}> 
          <View style={{ width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position:'absolute', 
          top: 5
           }}>

         <FormularioLogin>

          <Text style={{textAlign:'center', width:'100%', marginBottom: 24, fontSize: 26, textTransform:'uppercase', fontWeight:'bold' }}>Login</Text>
          
          <TextInput 
           style={styles.textForm} 
           placeholder="E-mail" 
           onChangeText={setEmail}
           value={email} 
          />

          {/* passar textForm para styled */}
          <TextInput 
           style={styles.textForm} 
           placeholder="Senha" 
           onChangeText={setPassword}
           value={password} 
           secureTextEntry={true}
           autoCorrect={false}
           autoCapitalize="none"
          />

        </FormularioLogin>

        <TouchableOpacity style={styles.buttonCriarconta}>
          <Text style={{ fontSize: 20, color:'#FFF', fontWeight:'bold', textTransform: 'uppercase' }}>ENTRAR</Text>
         </TouchableOpacity>

         </View>
        </Animated.View> 
        
       
      </Animated.View>
     
    </View>
    </TouchableWithoutFeedback>
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
    height: 50,
    borderWidth: 2,
    borderColor: '#1E90FF',
    backgroundColor: '#1E90FF',
    margin: 8,
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
  },
  textForm: {
    color: "black",
    fontSize: 18,
    fontWeight: '700',
    //paddingLeft: 8,
    //paddingRight: 8,
    borderColor: '#1E90FF',
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 18,
    width: "90%",
    height: 50,
    alignSelf: 'stretch',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 26,
    backgroundColor: "white"
  },

});

