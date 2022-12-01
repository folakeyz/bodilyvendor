import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AuthenticatedStack,
  AuthStack,
  VerificationStack,
} from "./src/components/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useUser } from "./src/auth/useUser";
import AuthContextProvider from "./src/context";

function Navigation() {
  const { user, notVerified } = useUser();
  return (
    <NavigationContainer>
      {!user && !notVerified && <AuthStack />}
      {notVerified && <VerificationStack />}
      {/* {!user && <AuthenticatedStack />} */}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const { user, updateUser, notVerified, pendingVerification } = useUser();

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("user");
      const stored = await AsyncStorage.getItem("verification");

      console.log(notVerified, "not");
      if (user) {
        updateUser(storedToken);
      }

      if (notVerified) {
        console.log("loading");
        pendingVerification(stored);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  const loadFonts = () => {
    return Font.loadAsync({
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    });
  };
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}
