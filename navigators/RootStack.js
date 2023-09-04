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
import NotificationScreen from "../screens/NotificationScreen"; 
import InstallmentScreen from "../screens/InstallmentScreen"; 
import FavoritesScreen from "../screens/FavoritesScreen"; 
import StoreLocatorScreen from "../screens/StoreLocatorScreen"; 
import SettingsScreen from "../screens/SettingsScreen"; 
import BranchesScreen from "../screens/BranchesScreen";
import TermsConditions from "../screens/TermsConditions";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MenuScreen from "../screens/MenuScreen";

import { Colors } from "../components/styles"; //import colors

import Icon from "react-native-vector-icons/MaterialIcons"; //icons

//tailwind
import { TailwindProvider } from "tailwindcss-react-native";

//statusbar state
import { useIsFocused } from "@react-navigation/native";

const { tertiary, white, red, bodyGray } = Colors;
const styles = StyleSheet.create({
  saveButton:{
    backgroundColor: 'black',
    color: 'white',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    fontWeight: 600,
    fontSize: 14,
    marginRight: 20
  },
});

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <TailwindProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:'#F5F5F5',
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View></View>
            ),
            headerTintColor: 'black', // Back button color
          })}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{
            headerShown: false,
          }}
        />
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
              <View></View>
            ),
            headerTintColor: "black",
          }}
        />

        <Stack.Screen
          name="InstallmentScreen"
          component={InstallmentScreen}
          options={{
            headerTitle: () => (
              <View></View>
            ),
            headerTintColor: 'black', 
          }}
        />

        <Stack.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            headerTitle: () => (
              <View></View>
            ),
            headerTintColor: 'black', 
          }}
        />

        <Stack.Screen
          name="StoreLocatorScreen"
          component={StoreLocatorScreen}
          options={{
            headerTitle: () => (
              <View></View>
            ),
            headerTintColor: 'black', 
          }}
        />

        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerTitle: () => (
              <View></View>
            ),
            headerTintColor: 'black', 
          }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: () => (
              <View></View>
            ),
            headerTintColor: 'black', //back button
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

        <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View style={styles.headerTITLE}>
            </View>
          ),
          headerBackground: () => (
            <View style={styles.headBG}></View>
          ),
          headerTintColor: 'black', // Back button color
          headerRight: () => (
            <TouchableOpacity onPress={() => {
                // Handle the save action here
              }}
            >
              <Text style={styles.saveButton}>SAVE</Text>
            </TouchableOpacity>
          ),
        })}
      />
      
      </Stack.Navigator>
    </TailwindProvider>
  );
};

export default RootStack;