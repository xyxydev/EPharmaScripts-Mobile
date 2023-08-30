import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
  },
  insideContainer:{
    width: '85%',
  },
  textTitle:{
    fontWeight: 600,
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  textTime:{
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 200,
  },
  line: {
    height: 0.5,
    width: "105%",
    backgroundColor: "#8E8E8E",
    marginTop: 20,
    color: '#8E8E8E',
    marginLeft: 20,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  notificationImage: {
    width: "28%",
    height: 80,
    resizeMode: "contain",
  },
  notificationTextContainer: {
    marginLeft: 10,
    marginRight: 20,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  notificationDescription: {
    fontSize: 14,
  },
});

const NotificationItem = ({ imageSource, title, description }) => (
  <View style={styles.notificationItem}>
    <Image source={imageSource} style={styles.notificationImage} />
    <View style={styles.notificationTextContainer}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
  </View>
);

const NotificationScreen = () => {
  const notifications = [
    {
      imageSource: require("../assets/img/amlodipine.png"),
      title: "Order has been delivered",
      description: "Your order has already been delivered. You can buy whenever you want again.",
    },
    {
      imageSource: require("../assets/img/amlodipine.png"),
      title: "Order Received?",
      description: "Please do not forget to rate, review, and provide feedback as it is important for our system.",
    },
    // ... Add more notification objects as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.textTitle}>Notifications</Text>
        <View style={styles.line} />
        <Text style={styles.textTime}>Today</Text>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            imageSource={notification.imageSource}
            title={notification.title}
            description={notification.description}
          />
        ))}
      </View>
    </View>
  );
};

export default NotificationScreen;
