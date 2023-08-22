import React from "react";
import { useState, useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons"; //icon
import Ionicons from "react-native-vector-icons/Ionicons";

import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';

//screns
import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MenuScreen from "../screens/MenuScreen";
import DiaryMaintenanceScreen from "../screens/DiaryMaintenanceScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";

import { Colors } from "../components/styles"; //import colors

//statusbar state
import { useIsFocused } from '@react-navigation/native';

const { red, dark } = Colors;

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  notificationIconContainer: {
    position: "absolute",
    right: 15,
  },
  tabBarUnderline: {
    position: "absolute",
    bottom: -6,
    height: 2,
    width: "44%",
    backgroundColor: "red", // Set the underline color to red
  },
});

const CustomHeaderTitle = () => {  
  const navigation = useNavigation();
  const handleNotificationPress = () => {
    // Navigate to notification screen when TouchableOpacity of notification icon is pressed
    navigation.navigate('NotificationScreen');
  };
  const handleProfilePress = () => {
    // Navigate to profile screen when TouchableOpacity of profile icon is pressed
    navigation.navigate('ProfileScreen');
  };
  const handleEditProfilePress = () => {
    // Navigate to edit profile screen when TouchableOpacity of edit profile button is pressed
    navigation.navigate('EditProfileScreen');
  };

  return (
    <View className="flex flex-row flex-wrap">
      <View className="w-1/2 pl-1 flex flex-row items-center">
        <Image
          source={require("../assets/img/EPS.png")}
          style={{ width: 39, height: 30 }}
        />
        <Text className="text-red-500 text-lg font-semibold">
          E-Pharmascripts
        </Text>
      </View>
      <View className="w-1/2 pt-1 flex-row flex-wrap justify-end">
        <TouchableOpacity>
          <View className="mr-5">
            <Icon name="search" size={26} color="red" />
          </View>
        </TouchableOpacity>            
        <TouchableOpacity onPress={handleNotificationPress}>
          <Ionicons
            name="notifications-outline"
            size={26}
            color="red"
          />
        </TouchableOpacity> 
        <TouchableOpacity onPress={handleProfilePress}>
          <View className="w-8 h-8 ml-5" style={{marginTop: -4}}>
            <View className="">
                <Image
                  source={require("../assets/img/cymer.jpg")}
                  className="w-full h-full rounded-full"
                />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        tabBarStyle: {
          height: 55, // Increase the height of the tab bar
          borderRadius: 15,
          padding: 10,
          marginBottom: 15,
          marginLeft: 15,
          marginRight: 15,
        },
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Ionicons
                name="home"
                color={color}
                size={focused ? 30 : 27} // Increase the size when focused
              />
              {focused && <View style={styles.tabBarUnderline} />}
            </View>
          ),
          tabBarActiveTintColor: red, // Set the active tab color to red
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Icon
                name="shopping-cart"
                color={color}
                size={focused ? 30 : 27} // Increase the size when focused
              />
              {focused && <View style={styles.tabBarUnderline} />}
            </View>
          ),
          tabBarActiveTintColor: red, // Set the active tab color to red
          backgroundColor: "transparent", // Set the background color of the tab bar to transparent
        }}
      />
      <Tab.Screen
        name="DiaryMaintenance"
        component={DiaryMaintenanceScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Icon
                name="auto-stories"
                color={color}
                size={focused ? 30 : 27} // Increase the size when focused
              />
              {focused && <View style={styles.tabBarUnderline} />}
            </View>
          ),
          tabBarActiveTintColor: red, // Set the active tab color to red
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerTitle: () => (
            <View style={{ marginLeft: 9, marginBottom: 2 }}>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold'}}>Messages</Text>
            </View>
          ),
          headerShown: true,
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Ionicons
                name="chatbubble-ellipses-outline"
                color={color}
                size={focused ? 30 : 27} // Increase the size when focused
              />
              {focused && <View style={styles.tabBarUnderline} />}
            </View>
          ),
          tabBarActiveTintColor: red, // Set the active tab color to red
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Icon
                name="menu"
                color={color}
                size={focused ? 30 : 27} // Increase the size when focused
              />
              {focused && <View style={styles.tabBarUnderline} />}
            </View>
          ),
          tabBarActiveTintColor: red, // Set the active tab color to red
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle />, // Keep the header title visible
          tabBarLabel: "",
          tabBarButton: () => null, // Hide the entire tab button (icon and gap)
          headerShown: true, // Show the header
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;