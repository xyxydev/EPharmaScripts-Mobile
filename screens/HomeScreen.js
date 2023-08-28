import React from "react";
import { Iconify } from "react-native-iconify";
import SwiperFlatList from "react-native-swiper-flatlist";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView,TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

//styles
const styles = StyleSheet.create({
  searchFilterCont:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchCont: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    width: '82%',
    backgroundColor: 'white', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
    elevation: 1.5, 
    marginVertical: 10,
  },
  iconSearch: {
    marginRight: 10, 
    color: 'black',
  },
  inputSearch: {
    flex: 1,
  },
  iconFilterCont:{
    backgroundColor: 'black',
    padding: 10,
    marginLeft: 15,
    borderRadius: 15,
  }
});

// Calculate the image dimensions based on screen size
const imageWidth = width; //Adjust as needed
const imageHeight = height * 0.18; // Adjust as needed

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleBranches = () => {
    // Navigate to notification screen when TouchableOpacity of notification icon is pressed mi:filter

    navigation.navigate("BranchesScreen");
  };
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        {/* Body circum:search */ }
        <View className="pl-4 pr-4 pb-2">
          <StatusBar backgroundColor="white" barStyle="light-content" />
            <View style={{ marginTop: 13,marginBottom: 5,}}>
              <Text style={{ color: 'black', fontSize: 25, fontWeight: 600, marginLeft: 2,}}>E-
              <Text style={{color: '#EC6F56'}}> PharmaScripts</Text></Text>
            </View>
            <View style={styles.searchFilterCont}>
              <View style={styles.searchCont}>
                <Iconify icon="circum:search" size={22} style={styles.iconSearch} />
                <TextInput placeholder="Search product"/>
              </View>
              <TouchableOpacity>
                <View style={styles.iconFilterCont}>
                  <Iconify icon="mi:filter" size={25} color="white" />
                </View>
              </TouchableOpacity>
            </View>


          <View className="justify-center items-center mt-3 bg-gray-200">
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={0}
              showPagination
              paginationDefaultColor="#ccc" // Customize pagination color
              paginationActiveColor="#FF0000"
              paginationStyle={{
                flexDirection: "row",
                position: "absolute",
                bottom: 24,
                alignSelf: "center",
                justifyContent: "center",
              }}
              paginationStyleItem={{
                width: 35,
                height: 7,
                borderRadius: 2,
                marginLeft: 5,
                marginRight: 5,
              }}
              scrollEnabled={false} // Disable swiping
              data={[
                { image: require("../assets/img/ads.png") },

              ]}
              renderItem={({ item }) => (
                <Image
                  source={item.image}
                  style={{
                    width: imageWidth,
                    height: imageHeight,
                    resizeMode: "cover",
                    
                  }}
                />
              )}
            />
            <Text className="text-black-500 text-center text-xs p-1">
              Online pharmacy is the solution for a convenient way to buy medicine!
            </Text>
          </View>

          {/* PHARMACY SELECTION */}
          <Text className="mt-4 pl-1 pb-2" style={{color: '#3A3A3A', fontWeight: 600, fontSize: 16,}}>
            Pharmacy Selection
          </Text>
          <View className="flex flex-row flex-wrap">
            {/**Pharmacy containers code */}
            <View className="w-1/2 p-2 ">
              <View
                style={{
                  height: 190,
                  borderRadius: 15,
                  backgroundColor: "white",
                  padding: 8,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  shadowOffset: { width: 0, height: 2 },
                  elevation: 1,
                }}
              >
                <Image
                  source={require("../assets/img/cymer.jpg")}
                  style={{
                    width: "100%",
                    height: 90,
                    objectFit: "cover",
                    borderRadius: 15,
                    marginTop: 5,
                  }}
                />
                <Text className="text-center pt-2" style={{color: '#3C3C3C', fontWeight: 600, fontSize: 12}}>Three-Xymer Pharmacy</Text>
                  <TouchableOpacity onPress={handleBranches}
                    style={{
                      backgroundColor: "white",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      paddingRight: 10,
                      paddingLeft: 15,
                      paddingTop: 10,
                      paddingBottom: 10,
                      marginTop: 14,
                      borderWidth: 1,
                      borderColor: "#EC6F56",
                      borderRadius: 15,
                      alignSelf: "center",
                    }}>
                      <Text style={{color: '#EC6F56', fontSize: 11, fontWeight: 500, marginRight: 3}}>View Pharmacy</Text>
                      <Iconify icon="ic:round-greater-than" size={15} color="#EC6F56" />
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
