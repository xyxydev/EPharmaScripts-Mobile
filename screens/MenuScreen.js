import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import NotificationScreen from "../screens/NotificationScreen";

const MenuScreen = () => {
  const navigation = useNavigation();

  
  const handleOrderScreen = () => {
    // Navigate to my order screen
    navigation.navigate("OrderScreen"); //CURRENTLY NO SCREEN !
  };
  
  const handleNotificationScreen = () => {
    // Navigate to notification screen
    navigation.navigate("NotificationScreen");
  };

  const handleInstallmentScreen = () => {
    // Navigate to installment screen
    navigation.navigate("InstallmentScreen"); //CURRENTLY NO SCREEN !
  };

  const handleFavoritesScreen = () => {
    // Navigate to favorites screen
    navigation.navigate("FavoritesScreen"); //CURRENTLY NO SCREEN !
  };

  const handleStoreLocatorScreen = () => {
    // Navigate to store locator screen
    navigation.navigate("StoreLocatorScreen"); //CURRENTLY NO SCREEN !
  };

  const handleSettingsScreen = () => {
    // Navigate to settings screen
    navigation.navigate("SettingsScreen");
  };
  

  const handleLogout = () => {
    // Perform logout actions here, such as clearing user session or navigating to the login screen
    // For example, you can navigate to the "Login" screen after logout
    navigation.navigate("Login");
  };

  return (
    
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'red', borderRadius: 999, width: 90, height: 90, marginLeft: 50, marginTop: 20, marginBottom: 20 }}>
          <Image
            source={require("../assets/img/cymer.jpg")}
            style={{ width: '100%', height: '100%', borderRadius: 999 }}
          />
        </View>
        <Text style={{ color: 'red', fontSize: 23, marginLeft: 15 }}>Xymer I. Serna</Text>
      </View>

      <TouchableOpacity
        onPress={handleOrderScreen}
        className="bg-white rounded-lg flex flex-row p-2 m-1 "
      >
        <View className="ml-5  ">
          <IconSimple name="notebook" size={24} color="red" />
        </View>
        <View className="ml-5">
          <Text className="text-custom-red mr-5 text-xl">My Order</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleInstallmentScreen}
        className="bg-white rounded-lg flex flex-row p-2 m-1 "
      >
        <View className="ml-5  ">
          <Ionicons name="card-outline" size={26} color="red" className="mr-4" />
        </View>
        <View className="ml-5">
          <Text className="text-custom-red mr-5 text-xl">Installment</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleFavoritesScreen}
        className="bg-white rounded-lg flex flex-row p-2 m-1 "
      >
        <View className="ml-5  ">
          <Icon name="favorite-border" size={26} color="red" />
        </View>
        <View className="ml-5">
          <Text className="text-custom-red mr-5 text-xl">Favorites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleStoreLocatorScreen}
        className="bg-white rounded-lg flex flex-row p-2 m-1 "
      >
        <View className="ml-5  ">
          <Ionicons name="ios-location-outline" size={27} color="red" />
        </View>
        <View className="ml-5">
          <Text className="text-custom-red mr-5 text-xl">Store Locator</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSettingsScreen}
        className="bg-white rounded-lg flex flex-row p-2 m-1 "
      >
        <View className="ml-5  ">
          <Ionicons name="ios-settings-outline" size={27} color="red" />
        </View>
        <View className="ml-5">
          <Text className="text-custom-red mr-5 text-xl">Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogout}
        className="bg-white rounded-lg flex flex-row p-2 m-1 "
      >
        <View className="ml-5  ">
          <Icon name="logout" size={28} color="red" />
        </View>
        <View className="ml-5">
          <Text className="text-custom-red mr-5 text-xl">Logout</Text>
        </View>
      </TouchableOpacity>

    </View>

  );
};

export default MenuScreen;