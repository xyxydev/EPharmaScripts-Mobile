import { View, Text, Switch } from "react-native";
import React, { useState } from 'react';
import FAicon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";


const SettingsScreen = () => {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationsEnabled((prevState) => !prevState);
      };

  return (
    <View>
        <View className="mr-2 ml-2 mt-4 mb-2 pb-40 bg-white">
         
            <Text className="text-base font-semibold border-b border-gray-200 pb-4 pt-4 ">   <FAicon name="user-o" size={20} color="black"/>  My Account</Text>
            
            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">Account and Security</Text>
                <FAicon name="angle-right" size={25} />
            </View>

            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">My Address</Text>
                <FAicon name="angle-right" size={25} />
            </View>

            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">Bank Accounts/ Cards</Text>
                <FAicon name="angle-right" size={25} />
            </View>

            <Text className="text-base font-semibold border-b border-gray-200 pb-4 pt-6">  <Ionicons name="notifications-outline" size={23} color="black"/> Notifications</Text>
        
            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">Notifications</Text>
                <Switch
                    value={isNotificationsEnabled}
                    onValueChange={toggleNotifications}
                    trackColor={{ true: 'red', false: 'gray' }}
                    thumbColor={isNotificationsEnabled ? 'red' : 'white'}
                />
            </View>

            <Text className="text-base font-semibold border-b border-gray-200 pb-4 pt-6">   <IconSimple name="earphones-alt" size={18} color="black"/>  Support</Text>
            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">Help Centre</Text>
                <FAicon name="angle-right" size={25} />
            </View>
            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">Community Rules</Text>
                <FAicon name="angle-right" size={25} />
            </View>
            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">E-PharmaScripts Policies</Text>
                <FAicon name="angle-right" size={25} />
            </View>
            <View className="flex flex-row items-center justify-between mr-3 mt-3 ml-3">
                <Text className="mr-2 text-base">About</Text>
                <FAicon name="angle-right" size={25} />
            </View>
        
      
        </View>

    </View>

   
  );
};

export default SettingsScreen;


