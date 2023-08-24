import React from "react";
import { View, Text } from "react-native";
import { Iconify } from "react-native-iconify";

const ShoppingCartScreen = () => {
  return (
    <View>
      <Iconify icon="mdi:heart" size={24} color="#900" />
      <Text>Hello, React Native Iconify!</Text>
    </View>
  );
};

export default ShoppingCartScreen;
