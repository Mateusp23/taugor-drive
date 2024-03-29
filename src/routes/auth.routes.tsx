import Home from "@/screens/Home";
import Login from "@/screens/Login";
import Register from "@/screens/Register";
import Splash from "@/screens/Splash";
import Upload from "@/screens/Upload";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="splash" component={Splash} />
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
      <Screen name="upload" component={Upload} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}