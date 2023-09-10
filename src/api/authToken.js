// authToken.js

import AsyncStorage from "@react-native-async-storage/async-storage";

// Save the user's email and authentication token to AsyncStorage
export const saveAuthToken = async (email, token) => {
  try {
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("token", token);
    console.log("Authentication token saved successfully:", email, token);
  } catch (error) {
    console.error("Error saving authentication token:", error);
  }
};

// Retrieve the user's email and authentication token from AsyncStorage
export const getAuthToken = async () => {
  try {
    const email = await AsyncStorage.getItem("email");
    const token = await AsyncStorage.getItem("token");
    console.log("Retrieved email and token from AsyncStorage:", email, token);
    return { email, token };
  } catch (error) {
    console.error("Error retrieving authentication token:", error);
    return null;
  }
};
