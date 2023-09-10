import { useNavigation } from "@react-navigation/native";

export const handleHomePress = () => {
  const navigation = useNavigation();
  navigation.navigate("Homescreen");
  // You can also set the initial route here if needed.
};
