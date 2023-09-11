import { View, Text, StyleSheet, Switch, Dimensions, Image, Button } from "react-native";
import React, { useState } from "react";
import { Iconify } from "react-native-iconify";
import OrderSwitchTabs from "../components/OrderSwitchTabs";
import { Checkbox } from "expo-checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";


const OrderScreen = () => {
  const [trackerTab, setTrackerTab] = useState(1);
  const onSelectSwitch = (value) => {
    setTrackerTab(value);
  }
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsEnabled((prevState) => !prevState);
  };
  const { width, height } = Dimensions.get("window");

  // State for the checkbox
  const [isChecked, setIsChecked] = useState(false); 
  
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>MY ORDERS</Text>

      <View>
        <OrderSwitchTabs 
          selectionMode={1}
          option1="PENDING"
          option2="APPROVED"
          option3="TO RECEIVE"
          option4="CANCELLED"
          option5="COMPLETED"
          onSelectSwitch={onSelectSwitch}
          />
      </View>
      {trackerTab == 1 && 
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image
            source={require("../assets/img/amlodipine.png")}
            style={styles.productImage}
            />
          </View>
          <View style={styles.productInfoContainer}>
            <View>
              <Text style={styles.productName}>Zynapse 1G Tablet</Text>
              <Text style={styles.productReq}>[ Requires Prescription ]</Text>
            </View>
            <View style={styles.priceRowContainer}>
              <Text style={styles.productAmount}>x1</Text>
              <Text style={styles.productPrice}>{"\u20B1"}102.75</Text>
            </View>
          </View>

        </View>
      }
      {trackerTab == 2 &&
          <View style={styles.container}>
            <View style={styles.productContainer}>
              <View>
                <Checkbox color='#EC6F56' value={isChecked} onValueChange={setIsChecked} style={styles.checkBoxIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image
                source={require("../assets/img/amlodipine.png")}
                style={styles.productImage}
                />
              </View>
              <View style={styles.productInfoContainer}>
                <View>
                  <Text style={styles.productName}>Zynapse 1G Tablet</Text>
                  <Text style={styles.productReq}>[ Requires Prescription ]</Text>
                </View>
                <View style={styles.priceRowContainer}>
                  <Text style={styles.productAmount}>x1</Text>
                  <Text style={styles.productPrice}>{"\u20B1"}102.75</Text>
                </View>
              </View>
        
              <View style={styles.xButtonWrapper}>
                <TouchableOpacity style={styles.xButton}>
                  <Iconify icon="carbon:close-filled" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>
           
            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton}>
                <Text style={styles.proceedText}>Proceed to payment</Text>
                <Iconify icon="iconoir:nav-arrow-right" size={22} color="white" />
              </TouchableOpacity>
            </View>

          </View>

      }
      {trackerTab == 3 &&
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image
            source={require("../assets/img/amlodipine.png")}
            style={styles.productImage}
            />
          </View>
          <View style={styles.productInfoContainer}>
            <View>
              <Text style={styles.productName}>Zynapse 1G Tablet</Text>
              <Text style={styles.productReq}>[ Requires Prescription ]</Text>
            </View>
            <View style={styles.priceRowContainer}>
              <Text style={styles.productAmount}>x1</Text>
              <Text style={styles.productPrice}>{"\u20B1"}102.75</Text>
            </View>
          </View>

        </View>
      }
      {trackerTab == 4 &&
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image
            source={require("../assets/img/amlodipine.png")}
            style={styles.productImage}
            />
          </View>
          <View style={styles.productInfoContainer}>
            <View>
              <Text style={styles.productName}>Zynapse 1G Tablet</Text>
              <Text style={styles.productReq}>[ Requires Prescription ]</Text>
            </View>
            <View style={styles.priceRowContainer}>
              <Text style={styles.productAmount}>x1</Text>
              <Text style={styles.productPrice}>{"\u20B1"}102.75</Text>
            </View>
          </View>

        </View>
      }
      {trackerTab == 5 &&
        <View>
          <View style={styles.completedOrderContainer}>
            <View style={styles.completedProductContainer}>
              <View style={styles.imageContainer}>
                <Image
                source={require("../assets/img/amlodipine.png")}
                style={styles.productImage}
                />
              </View>
              <View style={styles.productInfoContainer}>
                <View>
                  <Text style={styles.productName}>Zynapse 1G Tablet</Text>
                  <Text style={styles.productReq}>[ Requires Prescription ]</Text>
                </View>
                <View style={styles.priceRowContainer}>
                  <Text style={styles.productAmount}>x1</Text>
                  <Text style={styles.productPrice}>{"\u20B1"}102.75</Text>
                </View>
              </View>

            </View>
            <View>
              <View style={styles.viewRateContainer}>
                  <TouchableOpacity>
                    <View style={styles.viewButton}>
                      <Text style={styles.viewText}>VIEW</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.rateButton}>
                      <Text style={styles.rateText}>RATE</Text>
                    </View>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      }
    </View>
  );
}; 

export default OrderScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: '100%'
  },
  screenTitle:{
    fontWeight: 500,
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  productReq:{
    fontWeight: "normal",
    fontSize: 7,
    color: '#0CB669',
    marginTop: 5,
  },
  productContainer:{
    flexDirection: 'row',
    alignItems: "center", // Added to vertically align the image and info
    paddingHorizontal: 16, // Added to provide some spacing
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: 25,
  },
  imageContainer: {
    flex: 1, // Image takes 50% of the container width

  },
  productImage: {
    height: 120, // Adjust the height as needed
    width: "100%", // Make the image take the entire container width
    marginLeft: -15,
    
  },
  productInfoContainer: {
    flex: 1, // Product info takes 50% of the container width
    
  },
  priceRowContainer:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productName:{
    fontWeight: 600,
    fontSize: 14
  },
  productPrice:{
    fontSize: 14,
    fontWeight: 500,
  },
  productAmount:{
    fontSize: 14,
    fontWeight: 300,
  },
  xButtonWrapper: {
    position: 'absolute',
    top: 5, // Adjust the top position as needed
    right: 5, // Adjust the right position as needed
    marginRight: 3,
    marginTop: 3,
  },
  checkBoxIcon:{
    marginRight: 10,
    width: 20, 
    height: 20,
  },
  proceedButton:{
    backgroundColor: '#DC3642',
    borderRadius: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
    zIndex: 3,
    width: '80%',
    justifyContent: 'center',
  },
  proceedButtonContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingBottom: 20, 
  },
  proceedText:{
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 20,
  },
  completedOrderContainer:{
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    width: '90%',
    height: 175,
    marginTop: 25,
    paddingHorizontal: 16, // Added to provide some spacing
    alignSelf: 'center',
  },
  completedProductContainer:{
    flexDirection: 'row',
    alignItems: "center", // Added to vertically align the image and info
  },
  viewRateContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: -10,
  },
  viewText:{
    fontWeight: 600,
    fontSize: 12,
    color: '#EC6F56'
  },
  rateText:{
    fontWeight: 600,
    fontSize: 12,
    color: 'white'
  },
  viewButton:{
    backgroundColor: 'white',
    borderColor: '#EC6F56',
    borderWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 10,
    marginRight: 10,
  },
  rateButton:{
    backgroundColor: '#EC6F56',
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 10,
  },
  
  
});