// CartNavigatorHeader.js
import React from "react";
import { Iconify } from "react-native-iconify";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CartNavigatorHeader = () => {
  const navigation = useNavigation(); // Use useNavigation inside the component

  const handleCartPress = () => {
    navigation.navigate("ShoppingCart"); // Navigate to the "ShoppingCart" route
  };

  return (
    <TouchableOpacity
      onPress={handleCartPress}
      style={{ alignSelf: "flex-end" }}
    >
      <Iconify
        icon="material-symbols:shopping-cart-outline"
        size={24}
        color="red"
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  );
};

export default CartNavigatorHeader;
