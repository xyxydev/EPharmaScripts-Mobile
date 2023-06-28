import { View, Text, Image } from "react-native";
import React from "react";

const NotificationScreen = () => {
  return (
    <View>
      <View>
        <Text className="px-2 mt-5 ml-2 text-lg font-bold">Notification</Text>
        <Text className="px-2 mt-2 ml-6" style={{color: 'gray', fontSize: 16, marginBottom: 10 }}>Today</Text>
      </View>

      <View className="flex flex-row items-center bg-white p-2">
        <Image
          source={require("../assets/img/amlodipine.png")}
          className="w-1/4 max-w-none h-20 max-h-none"
        />
        <View className="ml-3 mr-20">
          <Text className="text-sm font-bold ">Order has been delivered</Text>
          <Text className="text-sm">
          Your order has already been delivered. You can buy whenever you want again.
          </Text>
        </View>
      </View>

      <View className="flex flex-row items-center bg-gray  p-2 mt-1">
        <Image
          source={require("../assets/img/amlodipine.png")}
          className="w-1/4 max-w-none h-20 max-h-none"
        />
        <View className="ml-3 mr-20"> 
          <Text className="text-sm font-bold">Order Received?</Text>
          <Text>Please do not forget to rate, review, and feedback as it is important for our system.</Text>
        </View>
      </View>
    </View>

   
  );
};

export default NotificationScreen;