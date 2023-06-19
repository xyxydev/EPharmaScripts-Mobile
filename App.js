import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native"; // Add this import
import RootStack from "./navigators/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <RootStack />
      </TailwindProvider>
    </NavigationContainer>
  );
}
