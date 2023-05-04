import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
    input: {
        borderRadius: 8,
        height: 50,
        fontSize: 16,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        marginBottom: 16,
        padding: 16,
        fontFamily: 'Roboto-Regular',
      },
      
      button:{
            paddingVertical: 12,
            paddingHorizontal: 92,
            height: 50,
            borderRadius: 100,
            backgroundColor: '#FF6C00',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 43,
            fontFamily: 'Roboto-Regular',
          },
      form: {
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      //   borderColor: 'tomato', 
      //   borderWidth: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
      },
})