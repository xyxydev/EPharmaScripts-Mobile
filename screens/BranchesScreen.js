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
const BranchesScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="border-2 border-red-500  items-center flex-row p-2 mt-5 ml-3 mr-3 rounded-lg">
          <Image
            source={require("../assets/img/cymer.jpg")}
            className="w-16 h-16 object-cover rounded-t-lg ml-1"
          />
          <Text className="pl-2 text-xl font-bold ml-2 text-red-500">
            Three-Xymer Pharmacy
          </Text>
        </View>

        <View className="border-b-2 border-gray-300 mt-5 ml-3 mr-3" />

        <View className="flex flex-row flex-wrap p-2">
          {/**Pharmacy containers code */}
          <View className="w-1/2 p-2 ">
            <View
              style={{
                height: 250,
                backgroundColor: "#F4F4F4",
                padding: 8,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
              }}
            >
              <Image
                source={require("../assets/img/cymer.jpg")}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <Text className="text-center text-sm font-bold pt-3">
                Three-Xymer Pharmacy
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "temporarily using alert since Math doesn't exist"
                  )
                }
              >
                <View className="bg-red-500 flex flex-row items-center justify-center w-13  p-2 mt-3">
                  <Text className="text-white text-xs font-bold ">
                    View Pharmacy
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-1/2 p-2 ">
            <View
              style={{
                height: 250,
                backgroundColor: "#F4F4F4",
                padding: 8,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
              }}
            >
              <Image
                source={require("../assets/img/cymer.jpg")}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <Text className="text-center text-sm font-bold pt-3">
                Three-Xymer Pharmacy
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "temporarily using alert since Math doesn't exist"
                  )
                }
              >
                <View className="bg-red-500 flex flex-row items-center justify-center w-13  p-2 mt-3">
                  <Text className="text-white text-xs font-bold ">
                    View Pharmacy
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-1/2 p-2 ">
            <View
              style={{
                height: 250,
                backgroundColor: "#F4F4F4",
                padding: 8,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
              }}
            >
              <Image
                source={require("../assets/img/cymer.jpg")}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <Text className="text-center text-sm font-bold pt-3">
                Three-Xymer Pharmacy
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "temporarily using alert since Math doesn't exist"
                  )
                }
              >
                <View className="bg-red-500 flex flex-row items-center justify-center w-13  p-2 mt-3">
                  <Text className="text-white text-xs font-bold ">
                    View Pharmacy
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-1/2 p-2 ">
            <View
              style={{
                height: 250,
                backgroundColor: "#F4F4F4",
                padding: 8,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
              }}
            >
              <Image
                source={require("../assets/img/cymer.jpg")}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <Text className="text-center text-sm font-bold pt-3">
                Three-Xymer Pharmacy
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "temporarily using alert since Math doesn't exist"
                  )
                }
              >
                <View className="bg-red-500 flex flex-row items-center justify-center w-13  p-2 mt-3">
                  <Text className="text-white text-xs font-bold ">
                    View Pharmacy
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-1/2 p-2 ">
            <View
              style={{
                height: 250,
                backgroundColor: "#F4F4F4",
                padding: 8,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
              }}
            >
              <Image
                source={require("../assets/img/cymer.jpg")}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                }}
              />
              <Text className="text-center text-sm font-bold pt-3">
                Three-Xymer Pharmacy
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "temporarily using alert since Math doesn't exist"
                  )
                }
              >
                <View className="bg-red-500 flex flex-row items-center justify-center w-13  p-2 mt-3">
                  <Text className="text-white text-xs font-bold ">
                    View Pharmacy
                  </Text>
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
