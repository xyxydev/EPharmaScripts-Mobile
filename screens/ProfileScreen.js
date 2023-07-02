import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";


const styles = StyleSheet.create({
  container:{
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    backgroundColor: 'white',
    paddingBottom: 10
  },
  pic_cont:{
    width: 120,
    height: 120,
    marginTop:15,
    marginLeft:120,
  },
  voucher_cont:{
    width: 110,
    marginLeft:20,
  },
  getDiscount_cont:{
    width: 220,
  },
  save_cont:{
    alignItems: 'center',
    marginTop:10,
    marginBottom:20,

  }
});

const ProfileScreen = () => {
  return (
    
    <ScrollView>
      <View style={styles.container}>
        <Text className="text-red-500 text-2xl font-medium text-center mt-5">Profile Information</Text>
        <View style={styles.pic_cont}>
          <Image
            source={require("../assets/img/cymer.jpg")}
            className="w-full h-full rounded-full place-items-center"
          />
        </View>

        <View className="mr-3 ml-3">
          <View className="pr-60">
            <TouchableOpacity onPress>
            <Text className="rounded-md bg-red-500 text-white text-s text-center mt-3 pt-1 pb-1.5">Edit Profile</Text>
            </TouchableOpacity> 
          </View>

          <View className="border-b border-gray-200 mt-4 ">
            <Text className="text-base text-red-500">USERNAME</Text>
            <Text className="text-base mb-1 mt-1">xyxy123</Text>
          </View>

          <View className="border-b border-gray-200 mt-2 ">
            <Text className="text-base text-red-500">NAME</Text>
            <Text className="text-base mb-1 mt-1">Jay Mar Rebanda</Text>
          </View>

          <View className="border-b border-gray-200 mt-2  ">
            <Text className="text-base text-red-500">PHONE</Text>
            <Text className="text-base mb-1 mt-1">09123456789</Text>
          </View>

          <View className="border-b border-gray-200 mt-2  ">
            <Text className="text-base text-red-500">GENDER</Text>
            <Text className="text-base mb-1 mt-1">Male</Text>
          </View>

          <View className="border-b border-gray-200 mt-2 ">
            <Text className="text-base text-red-500">BIRTH DATE</Text>
            <Text className="text-base mb-1 mt-1">June 1, 2023</Text>
          </View>

          <View className="border-b border-gray-200 mt-2 pr-60 mb-1  ">
            <Text className="text-base text-red-500">VALID ID</Text>
            <TouchableOpacity onPress>
            <Text className="rounded-md text-base mb-1 mt-1 bg-red-500 text-white text-s pt-1 text-center pb-1.5 mb-2 mt-2">Upload <Feather name="upload" size={17} /></Text>
            </TouchableOpacity> 
          </View>
        </View>
      </View>
      <View style={styles.save_cont}>
        <TouchableOpacity onPress>
        <Text className="font-medium rounded-lg bg-red-500 text-base text-white text-s text-center mt-1 pt-3 pb-3 pl-20 pr-20">Save Changes</Text>
        </TouchableOpacity> 
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
