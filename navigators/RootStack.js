import React from "react";
import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";

//screens
import Login from "../screens/login";
import Signup from "../screens/Signup";
import TabNavigator from "./tabNavigator"; //import TabNavigator
import NotificationScreen from "../screens/NotificationScreen"; // ----------new
import BranchesScreen from "../screens/BranchesScreen";

import { Colors } from "../components/styles"; //import colors

import Icon from "react-native-vector-icons/MaterialIcons"; //icons

//tailwind
import { TailwindProvider } from "tailwindcss-react-native";
import ProfileScreen from "../screens/ProfileScreen";

//statusbar state
import { useIsFocused } from "@react-navigation/native";

const { tertiary, white, red } = Colors;

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <TailwindProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: white,
          },
          headerTintColor: tertiary,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            headerTitle: () => (
              <View style={{ marginLeft: -18, marginBottom: 2 }}>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Notifications
                </Text>
              </View>
            ),
            headerBackground: () => (
              <View style={{ flex: 1, backgroundColor: red }}></View>
            ),
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="BranchesScreen"
          component={BranchesScreen}
          options={{
            headerTitle: () => (
              <View style={{ marginLeft: -18, marginBottom: 2 }}>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Branches
                </Text>
              </View>
            ),
            headerBackground: () => (
              <View style={{ flex: 1, backgroundColor: red }}></View>
            ),
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </TailwindProvider>
  );
};

export default RootStack;
