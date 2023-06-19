import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate("Login");
  }, []);

  return null; // or you can render a loading indicator or any other UI component
};

export default Logout;
