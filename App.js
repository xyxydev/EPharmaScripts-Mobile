import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./src/api/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TailwindProvider } from "tailwindcss-react-native";
import RootStack from "./navigators/RootStack"; // Your main app stack
import AuthStack from "./navigators/AuthStack"; // Your authentication stack (Login and Signup)
import UserIdContext, { UserIdProvider } from "./src/api/userIDContext"; // Import UserIdProvider
import { getAuthToken } from "./src/api/authToken";

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check if a token is stored in AsyncStorage
    const retrieveToken = async () => {
      try {
        const { token, userId } = await getAuthToken();

        if (token && userId) {
          setUserToken(token);
          setUserId(userId);
          // Set the user token in context first
          authContext.signIn(token);
          // Then set the user ID
          authContext.setUserId(userId);

          console.log("retrieved token and userid from app.js:", userId);
        }
      } catch (error) {
        console.error("Error retrieving data from AsyncStorage:", error);
      }
    };

    retrieveToken();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: (token) => {
        setUserToken(token);
        // Save token to AsyncStorage
        AsyncStorage.setItem("token", token);
      },
      signOut: () => {
        setUserToken(null);
        setUserId(null);
        console.log("UserId removed successfully", userId);
        // Clear token from AsyncStorage
        AsyncStorage.removeItem("token").then(() => {
          console.log("Token removed from AsyncStorage");
        });
      },
      setUserId: (newUserId) => {
        setUserId(newUserId);
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <UserIdProvider value={userId}>
        <TailwindProvider>
          <NavigationContainer>
            {userToken ? <RootStack /> : <AuthStack />}
          </NavigationContainer>
        </TailwindProvider>
      </UserIdProvider>
    </AuthContext.Provider>
  );
};

export default App;
