import React from "react";
import { useFonts } from "expo-font";
import { Registration } from "./src/Screens/RegistrationScreen";
import { Login } from "./src/Screens/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";


export default function App() {

  const [loaded] = useFonts({
    "Roboto-Medium": require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto/Roboto-Regular.ttf') 
     });

if (!loaded) {
  return null;
}

  return (
    // <Login/>
     <Registration />
    // <PostsScreen />

  );
}

