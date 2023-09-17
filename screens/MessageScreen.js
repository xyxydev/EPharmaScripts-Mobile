import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image, // Import Image component
} from "react-native";
import { Iconify } from "react-native-iconify";
import { TextInput } from "react-native-gesture-handler";

const MessageScreen = ({ navigation }) => {
  // Simulated chat list data (replace with actual data)
  const chatList = [
    {
      id: "1",
      name: "John Doe",
      lastMessage: "Hello there!",
      timestamp: "10:30 AM",
      image: require("../assets/img/cymer.jpg"),
    },
    {
      id: "2",
      name: "Jane Smith",
      lastMessage: "How are you doing?",
      timestamp: "11:45 AM",
      image: require("../assets/img/cymer.jpg"),
    },
    // Add more chat items here
  ];

  // Get screen dimensions
  const { width } = Dimensions.get("window");

  // Calculate dynamic padding based on screen width
  const dynamicPadding = Math.min(16, width * 0.05);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Messages</Text>
        <View style={styles.horizontalLine} />
      </View>
      <View className="items-center flex-row mt-5 ml-3 mr-3 ">
        <View style={styles.searchFilterCont}>
          <View style={styles.searchCont}>
            <Iconify icon="circum:search" size={22} style={styles.iconSearch} />
            <TextInput placeholder="Search branch" />
          </View>
        </View>
      </View>
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.chatItem,
              { paddingHorizontal: dynamicPadding }, // Add padding here
            ]}
            onPress={
              () =>
                navigation.navigate("ChatScreen", {
                  name: item.name,
                  image: item.image,
                })
              // navigation.navigate("Home")
            }
          >
            <View style={styles.chatContent}>
              <Image source={item.image} style={styles.chatImage} />
              <View style={styles.chatText}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingTop: 50, // Increased top padding
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  horizontalLine: {
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginTop: 8,
  },

  //search styles
  searchFilterCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchCont: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1.5,
    marginVertical: 10,
  },
  iconSearch: {
    marginRight: 10,
    color: "black",
  },
  inputSearch: {
    flex: 1,
  },

  //messages
  chatItem: {
    paddingVertical: 12,
    paddingHorizontal: 16, // Add padding here
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  chatContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatImage: {
    width: 48, // Set image width
    height: 48, // Set image height
    borderRadius: 24, // Make it a circle
    marginRight: 10, // Add spacing between image and text
  },
  chatText: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastMessage: {
    color: "#555",
  },
  timestamp: {
    fontSize: 12,
    color: "#777",
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
});

export default MessageScreen;
