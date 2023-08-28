import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import NotificationScreen from "../screens/NotificationScreen";
import IconFeather from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
  wholeContainer:{
    backgroundColor: 'white',
    paddingBottom: 400,
    borderRadius: 20,
  },
  upperContainer:{
    alignItems: 'center', // Align items vertically
    justifyContent: 'center', // Center items horizontally
  },
  lowerContainer:{
    width: '80%',
    marginTop: 30,
    marginLeft: 40,
  },
  title:{
      fontWeight: 600,
      fontSize: 18,
      marginTop: 20,
  },
  pic_cont:{
      width: 120,
      height: 120,
      marginTop:7,
  },
  camera:{
      backgroundColor: '#EC6F56', 
      padding: 7, 
      borderRadius: 24, 
      marginVertical: -33,
      marginLeft: 80,
  },
  label:{
      fontSize: 16,
      fontWeight: 600,
      marginLeft: 6,
  },
  infoCont:{
      backgroundColor: '#F5F2F2',
      padding: 10,
      borderRadius: 20,
      marginVertical: 5,
  },
  info:{
      fontSize: 14,
      fontWeight: 400,
      marginLeft: 10,
  },
  labelInfoCont:{
      marginVertical: 4,
  },

  iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // Add this line
  },
  line: {
    height: 0.5,
    width: '85%',
    backgroundColor: '#8E8E8E',
    marginTop: 20,

  },
  
});

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
    
    <View style={styles.wholeContainer}>
      <Text>E-<Text>PharmaScripts</Text></Text>
      <View style={styles.line}></View> 
          <View>
              
          </View>
      

    </View>

  );
};

export default MenuScreen;