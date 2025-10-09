import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { enableScreens } from "react-native-screens";
enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Login"
              options={{ title: "Zumbarla's Sample Work" }}
              component={LoginScreen}
            />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
