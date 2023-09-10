import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { AuthContext } from "./src/api/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TailwindProvider } from "tailwindcss-react-native";
import RootStack from "./navigators/RootStack"; // Your main app stack
import AuthStack from "./navigators/AuthStack"; // Your authentication stack (Login and Signup)

const App = () => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    // Check if a token is stored in AsyncStorage
    const retrieveToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setUserToken(token);
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
        // Clear token from AsyncStorage
        AsyncStorage.removeItem("token").then(() => {
          console.log("Token removed from AsyncStorage");
        });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <TailwindProvider>
        <NavigationContainer>
          {userToken ? <RootStack /> : <AuthStack />}
        </NavigationContainer>
      </TailwindProvider>
    </AuthContext.Provider>
  );
};

export default App;
