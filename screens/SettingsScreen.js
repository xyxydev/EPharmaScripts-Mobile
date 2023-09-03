import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView  } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";

const SettingsScreen = () => {
    //const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

   // const toggleNotifications = () => {
        //setIsNotificationsEnabled((prevState) => !prevState);
     // };

  return (
    
    <View style={styles.container}>
        
            <Text style={styles.screenTitle}>Settings</Text>

            <View style={styles.insideContainer}>
                <View style={styles.supportContainer}>
                    <Iconify icon="basil:headset-outline" size={22} color="black" />
                    <Text style={styles.supportText}>  Support</Text>
                </View>

                <View style={styles.line}/>

                <TouchableOpacity onPress>
                    <View style={styles.touchableCont}>
                        <Text style={styles.touchableText}>Help Center</Text>
                        <View style={styles.arrowIcon}>
                        <Iconify icon="iconoir:nav-arrow-right" size={22} color="#3A3A3A" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress>
                    <View style={styles.touchableCont}>
                        <Text style={styles.touchableText}>Community Rules</Text>
                        <View style={styles.arrowIcon}>
                        <Iconify icon="iconoir:nav-arrow-right" size={22} color="#3A3A3A" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress>
                    <View style={styles.touchableCont}>
                        <Text style={styles.touchableText}>E-Pharmascripts Policies</Text>
                        <View style={styles.arrowIcon}>
                        <Iconify icon="iconoir:nav-arrow-right" size={22} color="#3A3A3A" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress>
                    <View style={styles.touchableCont}>
                        <Text style={styles.touchableText}>About</Text>
                        <View style={styles.arrowIcon}>
                        <Iconify icon="iconoir:nav-arrow-right" size={22} color="#3A3A3A" />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>






        {/*
            <Text className="text-base font-semibold border-b border-gray-200 pb-4 pt-6">  
            <Ionicons name="notifications-outline" size={23} color="black"/> Notifications</Text>
            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">Notifications</Text>
                <Switch
                    value={isNotificationsEnabled}
                    onValueChange={toggleNotifications}
                    trackColor={{ true: 'red', false: 'gray' }}
                    thumbColor={isNotificationsEnabled ? 'red' : 'white'}
                />
            </View>
            */}
    </View>

   
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      paddingBottom: 20,
      borderTopLeftRadius: 20,     // Apply a border radius to the top left corner
      borderTopRightRadius: 20,    // Apply a border radius to the top right corner
      flex: 1,
    },
    insideContainer:{
      width: '85%',
    },
    supportContainer:{
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 32,
    },
    supportText:{
        fontWeight: 600,
        fontSize: 16,
    },
    screenTitle:{
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 20,
    },
    line: {
      height: 0.5,
      width: "100%",
      backgroundColor: "#8E8E8E",
      marginTop: 20,
      marginLeft: 30,
      marginBottom: 15,
    },
    touchableCont:{
        flexDirection: 'row', // Arrange icons and text horizontally
        alignItems: 'center', // Align items vertically within the container
        justifyContent: 'flex-start', // Spread elements apart
        marginBottom: 10,
        marginLeft: 35,
    },
    touchableText:{
        color: '#4E4E4E',
        fontWeight: 400,
        fontSize: 16,
    },
    arrowIcon: {
      flex: 1,                 // Distribute remaining space
      alignItems: 'flex-end',  // Align icon to the end of the flex container
      marginLeft: 'auto', 
      marginRight: -30,
    },
    
  });
