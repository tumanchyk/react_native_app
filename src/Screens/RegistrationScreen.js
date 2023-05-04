import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/AntDesign';
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
    login: '',
    email: '',
    password: '',
  }

export const Registration = () => {
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
    }, [dimensions]);

 
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
              paddingBottom: isShowKeyboard ? 20 : 78, 
              paddingTop: 60,
              width: dimensions,
              position: 'relative'
              }}
            >

              <View style={styles.photoField}>
              <View style={styles.addPhotoBtn}>
                    <Icon name="plus" size={13} color="#FF6C00" />
              </View>
            </View>
            
              <Text style ={styles.title}>Registration</Text>
              <View >
                  <TextInput 
                    style={{
                      ...formStyles.input, 
                      borderColor: activeInput === 'Login' ? '#FF6C00' : '#E8E8E8' }} 

                    placeholder="Login" 
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setActiveInput('Login')
                    }}
                    onBlur={() => setActiveInput('')}
                    value={state.login}
                    onChangeText={(value) => {
                      setState((prevState) => ({...prevState, login: value}))
                    }}
                  />  
              </View>

              <View>
                <TextInput 
                  style={{
                    ...formStyles.input, 
                    borderColor: activeInput === 'Email' ? '#FF6C00' : '#E8E8E8' }}    

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
                  style={{
                    ...formStyles.input, 
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

              <TouchableOpacity 
                style={formStyles.button} 
                activeOpacity={0.8} 
                onPress={hideKeyBoard}>
                  <Text style ={{color: '#fff', fontSize: 16}}>Sign up</Text>
              </TouchableOpacity>
              <Text style={styles.singInLink}
                    onPress={() => Linking.openURL('http://google.com')}>
                Already have an account? Sing in
              </Text>
          </View>
          </KeyboardAvoidingView>
      </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

