import React, { useState, useEffect } from "react";
import { styles } from "../styles/common";
import { formStyles } from "../styles/form";

import {
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    Linking
  } from "react-native";

  const initialState = {
    email: '',
    password: '',
  }

export  const Login = () => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [activeInput, setActiveInput] = useState('')

    const [dimensions, setDimensions] = useState(
      Dimensions.get("window").width
    );
  
    useEffect(() => {
      const onChange = () => {
        const width = Dimensions.get("window").width;
        console.log(width);
  
        setDimensions(width);
      };
      Dimensions.addEventListener("change", onChange);
      return () => {
        Dimensions.removeEventListener("change", onChange);
      };
    }, []);

 
  const hideKeyBoard = ()=>{
    setIsShowKeyboard(false)
    Keyboard.dismiss()
    console.log(state);
    setState(initialState)
  }
  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/bg-rn.jpg")}
      >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
            >
            <View
            style={{ 
              ...formStyles.form, 
              paddingBottom: isShowKeyboard ? 20 : 140, 
              width: dimensions,
              position: 'relative'
              }}
            >
             
              <Text style ={styles.title}>Login</Text>

              <View>
                <TextInput 
                  style={{...formStyles.input, borderColor: activeInput === 'Email' ? '#FF6C00' : '#E8E8E8' }}         
                  placeholder="Email address" 
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setActiveInput('Email')
                  }}
                  onBlur={() => setActiveInput('')}
                  value={state.email}
                  onChangeText={(value) => {
                    setState((prevState) => ({...prevState, email: value}))
                  }}
                />
              </View>
              <View style={{position: 'relative'}}>
                <TextInput 
                  style={{...formStyles.input, 
                    // marginBottom: isShowKeyboard ? 32 : 43, 
                    borderColor: activeInput === 'Password' ? '#FF6C00' : '#E8E8E8'}}         
                  placeholder="Password" 
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setActiveInput('Password')
                  }}
                  onBlur={() => setActiveInput('')}
                  value={state.password}
                  secureTextEntry={true}
                  onChangeText={(value) => {
                    setState((prevState) => ({...prevState, password: value}))
                  }}
                />
                <Text style={{color: '#1B4371', position: 'absolute', top: 16, right: 16,
              fontSize: 16}}>Show</Text>
              </View>
            
              <TouchableOpacity style={formStyles.button} activeOpacity={0.8} onPress={hideKeyBoard}>
                <Text style ={{color: '#fff', fontSize: 16}}>Sign in</Text>
                </TouchableOpacity>
                <Text style={styles.singInLink}
                      onPress={() => Linking.openURL('http://google.com')}>
                  Don't have an account? Sign up
                </Text>

          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};


