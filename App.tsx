import { Loading } from "@/components/Loading";
import { UserProvider } from "@/context/UserContext";
import { Routes } from "@/routes";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold, useFonts
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { LogBox } from 'react-native';

// Ignore all warnings
LogBox.ignoreAllLogs(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  return (
    <UserProvider>
      <NavigationContainer>
        {fontsLoaded ? <Routes /> : <Loading />}
      </NavigationContainer>
    </UserProvider>
  );
}
