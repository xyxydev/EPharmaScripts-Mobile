import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconCI from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors} from "../components/styles";


const { bodyGray } = Colors;
const { orange } = Colors;

const styles = StyleSheet.create({
  wholeContainer:{
    backgroundColor: 'white',
    paddingBottom: 400,
    borderRadius: 20,
  },
  upperContainer:{
    alignItems: 'center', // Align items vertically
    justifyContent: 'center', // Center items horizontally
  },
  lowerContainer:{
    width: '80%',
    marginTop: 15,
  },
  pic_cont:{
    width: 100,
    height: 100,
    marginTop:15,
  },
  voucher_cont:{
    width: 110,
    marginLeft:20,
  },
  getDiscount_cont:{
    width: 220,
  },
  save_cont:{
    alignItems: 'center',
    marginTop:10,
    marginBottom:20,

  },
  title:{
    fontWeight: 600,
    fontSize: 16,
    marginTop: 20,
  },
  nameGmailButton:{
    marginTop: 15,
    alignItems: 'center',
  },
  name:{
    fontWeight: 600,
    fontSize: 18,
  },
  gmail:{
    fontWeight: 400,
    fontSize: 10,
    color: '#8E8E8E',
  },
  editButton:{
    marginTop: 15,
    fontWeight: 600,
    fontSize: 14,
    color: 'white',
    backgroundColor: '#EC6F56',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 30,
  },
  line: {
    height: 0.5,
    width: '80%',
    backgroundColor: '#8E8E8E',
    marginTop: 20,

  },
  line2: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#8E8E8E',
    marginTop: 20,
    alignItems: 'center', // Align items vertically
    justifyContent: 'center',
    marginLeft: 40,

  },
  viewCont: {
    flexDirection: 'row', // Arrange icons and text horizontally
    alignItems: 'center', // Align items vertically within the container
    justifyContent: 'flex-start', // Spread elements apart
    paddingHorizontal: 10, // Add some horizontal spacing

  },
  viewContText:{
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 13,
    marginVertical: 15,
  },
  iconsBG: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 8,
    marginLeft: 25,
  }
});


const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleEditProfileScreen = () => {
    // Navigate to my order screen
    navigation.navigate("EditProfileScreen");
  };

  return (
      <View style={styles.wholeContainer}>
          <View style={styles.upperContainer}>
            <StatusBar backgroundColor="white" barStyle="light-content" />
            <Text style={styles.title}>Personal Information</Text>
              <View style={styles.pic_cont}>
                <Image
                  source={require("../assets/img/cymer.jpg")}
                  className="w-full h-full rounded-full"
                />
              </View>

              <View style={styles.nameGmailButton}>
                <Text style={styles.name}>Xyxy Pinakurat</Text>
                <Text style={styles.gmail}>xyxypinakurat@gmail.com</Text>
                <TouchableOpacity onPress={handleEditProfileScreen}>
                <Text style={styles.editButton}>Edit Profile</Text>
                </TouchableOpacity> 
              </View>

              <View style={styles.line}></View> 
          </View>


          <View style={styles.lowerContainer}> 

            <TouchableOpacity onPress>
              <View style={styles.viewCont}> 
                <Icon style={styles.iconsBG} name="logout" size={22} color="black" />
                <Text style={styles.viewContText}>My Account</Text>
                <IconCI style={{  marginLeft: 155}} name="greater-than" size={22} color="black" />
              </View>
            </TouchableOpacity>
          
            <TouchableOpacity onPress>
              <View style={styles.viewCont}> 
                <Icon style={styles.iconsBG} name="logout" size={22} color="black" />
                <Text style={styles.viewContText}>My Address</Text>
                <IconCI style={{  marginLeft: 155}} name="greater-than" size={22} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress>
              <View style={styles.viewCont}> 
                <Icon style={styles.iconsBG} name="logout" size={22} color="black" />
                <Text style={styles.viewContText}>Password and Security</Text>
                <IconCI style={{  marginLeft: 74}} name="greater-than" size={22} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress>
              <View style={styles.viewCont}> 
                <Icon style={styles.iconsBG} name="logout" size={22} color="black" />
                <Text style={styles.viewContText}>Notifications</Text>
                <IconCI style={{  marginLeft: 148}} name="greater-than" size={22} color="black" />
              </View>
            </TouchableOpacity>

            <View style={styles.line2}></View>

            <TouchableOpacity onPress>
              <View style={styles.viewCont} className="mt-2"> 
                <Icon style={styles.iconsBG} name="logout" size={22} color="black" />
                <Text style={styles.viewContText}>Delete Account</Text>
                <IconCI style={{  marginLeft: 130}} name="greater-than" size={22} color="black" />
              </View>
            </TouchableOpacity>

          </View>
 
      </View>
  );
};

export default ProfileScreen;
