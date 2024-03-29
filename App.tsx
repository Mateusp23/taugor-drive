import { Loading } from "@/components/Loading";
import { UserProvider } from "@/context/UserContext";
import { Routes } from "@/routes";
import { theme } from "@/theme";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold, useFonts
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { LogBox, StatusBar } from 'react-native';

// Ignore all warnings
LogBox.ignoreAllLogs(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.white} barStyle='dark-content' />
      <UserProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </UserProvider>
    </NavigationContainer>
  );
}
