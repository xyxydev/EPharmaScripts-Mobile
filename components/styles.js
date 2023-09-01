import React, { useState } from "react";
import { Iconify } from "react-native-iconify";
import SwiperFlatList from "react-native-swiper-flatlist";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { filterData } from "../components/data";

const { width, height } = Dimensions.get("window");

// Calculate the image dimensions based on screen size
const imageWidth = width; // Adjust as needed
const imageHeight = height * 0.18; // Adjust as needed
const cardWidth = (width - 30) / 2;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [indexCheck, setIndexCheck] = useState("0");

  const handleBranches = () => {
    // Navigate to notification screen when TouchableOpacity of notification icon is pressed
    navigation.navigate("BranchesScreen");
  };

  const renderPharmacy = ({ item }) => {
    return (
      <View className={`w-${cardWidth} ${tw("px-8 py-16")}`}>
        <View className={`w-full ${tw("bg-white rounded-lg p-8 shadow-md")}`}>
          <Image
            style={`w-full h-90 ${tw("rounded-lg mt-5")}`}
            source={item.image}
          />
          <Text
            className={`text-center text-12 font-semibold text-3C3C3C ${tw(
              "pt-2"
            )}`}
          >
            {item.name}
          </Text>
          <TouchableOpacity onPress={handleBranches}>
            <View
              className={`w-full ${tw(
                "bg-white flex-row items-center justify-center p-10 mt-14 border border-EC6F56 rounded-lg self-center"
              )}`}
            >
              <Text
                className={`text-EC6F56 text-11 font-semibold ${tw("mr-3")}`}
              >
                View Pharmacy
              </Text>
              <Iconify icon="ic:round-greater-than" size={15} color="#EC6F56" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        {/* Body */}
        <View className={`px-15 pb-10 ${tw("flex-1")}`}>
          <StatusBar backgroundColor="white" barStyle="light-content" />
          <View className="mt-13 mb-5">
            <Text className={`text-22 font-semibold ${tw("text-black")}`}>
              E-
              <Text className={`text-EC6F56 ${tw("")}`}> PharmaScripts</Text>
            </Text>
          </View>
          <View
            className={`flex-row items-center ${tw(
              "bg-white shadow-md rounded-lg p-10 w-82% self-center"
            )}`}
          >
            <Iconify
              icon="circum:search"
              size={22}
              className={`text-22 ${tw("text-black mr-10")}`}
            />
            <TextInput placeholder="Search product" />
          </View>
          <TouchableOpacity>
            <View className={`bg-black p-10 ml-15 ${tw("rounded-lg")}`}>
              <Iconify icon="mi:filter" size={25} color="white" />
            </View>
          </TouchableOpacity>
          <View
            className={`justify-center items-center ${tw("mt-10 bg-gray-200")}`}
          >
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={0}
              showPagination
              paginationDefaultColor="#ccc" // Customize pagination color
              paginationActiveColor="#FF0000"
              paginationStyle={`flex-row absolute bottom-24 self-center justify-center ${tw(
                ""
              )}`}
              paginationStyleItem={`w-35 h-7 rounded-2 ml-5 mr-5 ${tw("")}`}
              scrollEnabled={false} // Disable swiping
              data={[{ image: require("../assets/img/ads.png") }]}
              renderItem={({ item }) => (
                <Image
                  source={item.image}
                  style={`w-${imageWidth} h-${imageHeight} ${tw("rounded-lg")}`}
                />
              )}
            />
            <Text
              className={`text-12 text-black text-center text-xs p-5 ${tw("")}`}
            >
              Online pharmacy is the solution for a convenient way to buy
              medicine!
            </Text>
          </View>
          {/* PHARMACY SELECTION */}
          <Text
            className={`mt-10 pl-1 pb-2 text-16 font-semibold ${tw(
              "text-3A3A3A"
            )}`}
          >
            Pharmacy Selection
          </Text>
          <View className={`flex-1 ${tw("")}`}>
            <FlatList
              numColumns={2} // Display two items per row
              scrollEnabled={false}
              data={filterData}
              keyExtractor={(item) => item.id.toString()}
              extraData={indexCheck}
              renderItem={renderPharmacy}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
