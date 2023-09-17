import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Iconify } from "react-native-iconify";

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Extract the recipient's name from the route parameters
  const { name, image } = route.params;

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Create a new message object and add it to the messages state
    const message = {
      text: newMessage,
      sender: "You", // Change this to the actual sender's name
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      {/* Header displaying recipient's name */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
      </View> */}

      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "You" ? styles.yourMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestampText}>{item.timestamp}</Text>
          </View>
        )}
      />
      <View style={styles.centeredContainer}>
        <View style={styles.sendMessageCont}>
          <View style={styles.inputContainer}>
            <Iconify
              icon="fluent:emoji-48-regular"
              size={22}
              style={styles.icons}
            />
            <Iconify icon="mdi:image-outline" size={22} style={styles.icons} />
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              value={newMessage}
              onChangeText={(text) => setNewMessage(text)}
            />
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSendMessage}
            >
              <Iconify
                icon="bi:send-fill"
                size={26}
                style={styles.sendButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  messageContainer: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    maxWidth: "80%",
  },
  yourMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#8E8E8E",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  timestampText: {
    color: "#fff",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "flex-end", // Push content to the bottom
    alignItems: "center",
    // Adjust the margin as needed
  },
  sendMessageCont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20, // Adjust the margin as needed
  },

  input: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1.5,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "70%",
    marginLeft: 5, // Add this property to push it to the right
  },
  icons: {
    marginRight: 10,
    color: "black",
  },
  sendButtonContainer: {
    padding: 10,
    marginLeft: 2,
  },
  sendButton: {
    backgroundColor: "#EC6F56",
    borderRadius: 50, // Make it a circle
    width: 50,
    height: 50,
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
  },
  sendButtonIcon: {
    color: "white",
  },
});

export default ChatScreen;
