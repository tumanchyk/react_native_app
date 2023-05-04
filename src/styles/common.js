import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
     background: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
      alignItems: "center",
  
    },
    title:{
       color: '#000',
       fontSize: 30,
       marginVertical: 32,
       textAlign: 'center',
       fontFamily: 'Roboto-Medium',
    
    },
  
    singInLink: {
      color: '#000',
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      marginTop: 16,
      textAlign: 'center'
    },
    photoField: {
      width: 120,
      height: 120,
      position: 'absolute',
      top: -60, 
      alignSelf: 'center', 
      backgroundColor: '#F6F6F6', 
      borderRadius: 16
    },
    addPhotoBtn: {
      position: 'absolute', 
      bottom: 14, 
      right: -12, 
      width: 25, 
      height: 25, 
      borderRadius: 50, 
      borderWidth: 1,
      borderColor: 'orange', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
   
  });