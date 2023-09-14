import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { TextInput } from "react-native-gesture-handler";

const BranchesScreen = ({ navigation, route }) => {

  const handleProductScreen= () => {
    navigation.navigate("ProductScreen");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center flex-row mt-5 ml-3 mr-3 ">
          <Text className="pl-2 text-xl font-bold text-gray-800">
            {route.params?.name}
          </Text>
        </View>

        {/* <View className="border-b-2 border-gray-300 mt-5 ml-3 mr-3" /> */}
        <View className="items-center flex-row mt-5 ml-3 mr-3 ">
          <View style={styles.searchFilterCont}>
            <View style={styles.searchCont}>
              <Iconify
                icon="circum:search"
                size={22}
                style={styles.iconSearch}
              />
              <TextInput placeholder="Search branch" />
            </View>
          </View>
        </View>
        <Text className="text-base font-semibold pl-5 pt-3 text-gray-800">
          Branch Selection
        </Text>
        <View className="flex flex-row flex-wrap p-2">
          {/**Pharmacy containers code */}
          <View className="w-1/2 p-2 ">
            <View style={styles.pharmacyCard}>
              <Text className="pb-2 text-xs">4.1★</Text>
              <Image
                source={require("../assets/img/cymer.jpg")}
                style={styles.image}
              />
              <Text style={styles.pharmacyName}>Three-Xymer Pharmacy</Text>
              <TouchableOpacity onPress={handleProductScreen}
              >
                <View>
                  <View style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>View Pharmacy</Text>
                    <Iconify
                      icon="ic:round-greater-than"
                      size={15}
                      color="#EC6F56"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default BranchesScreen;
const styles = StyleSheet.create({
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

  //Flatlist Styles
  container: {
    flex: 1,
  },
  pharmacyContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  pharmacyCard: {
    height: 220,
    borderRadius: 15,
    backgroundColor: "white",
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  image: {
    width: "80%",
    height: 90,
    borderRadius: 15,
    marginTop: 2,
    marginBottom: 4,
    alignSelf: "center", // Center the image horizontally
  },
  pharmacyName: {
    textAlign: "center",
    color: "#3C3C3C",
    fontWeight: "600",
    fontSize: 14,
    paddingTop: 5,
  },
  viewButton: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#EC6F56",
    borderRadius: 15,
    alignSelf: "center",
  },
  viewButtonText: {
    color: "#EC6F56",
    fontSize: 11,
    fontWeight: "500",
    marginRight: 3,
  },
});
