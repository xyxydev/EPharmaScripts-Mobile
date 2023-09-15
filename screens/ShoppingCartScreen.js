import { View, Text, StyleSheet, Dimensions, Image, Button } from "react-native";
import React, { useState } from "react";
import { Iconify } from "react-native-iconify";
import { Checkbox } from "expo-checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const ShoppingCartScreen = () => {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  // State for the checkbox
  const [isChecked, setIsChecked] = useState(false); 
  // State for the quantity button
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const navigation = useNavigation();

  const handleToValidateScreen = () => {
    // Navigate to my order screen
    navigation.navigate("ToValidateScreen");
  };

  return (
    <View style={[styles.container, { height: deviceHeight-125}]}>
        <Text style={styles.screenTitle}>MY CART</Text>
        <View style={styles.selectedProductContainer}>
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
                  <View style={styles.quantityButton}>
                    <TouchableOpacity onPress={handleDecrement} style={styles.button}>
                      <Iconify icon="ph:minus-fill" size={22} color="#EC6F56" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={handleIncrement} style={styles.button}>
                    <Iconify icon="ph:plus-fill" size={22} color="#EC6F56" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.productPrice}>{"\u20B1"}102.75</Text>
                </View>
              </View>
        
              <View style={styles.xButtonWrapper}>
                <TouchableOpacity>
                  <Iconify icon="carbon:close-filled" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.checkoutContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price</Text>
                <Text style={styles.amountText}>₱ 102.75</Text>
              </View>
              <View style={styles.delFeeContainer}>
                <Text style={styles.delFeeText}>Delivery Fee</Text>
                <Text style={styles.amountText}>₱ 102.75</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.totalAmountContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalAmountText}>₱ 152.75</Text>
              </View>
              <TouchableOpacity style={styles.checkoutWrapper} onPress={handleToValidateScreen}>
                <Text style={styles.checkoutText}>CHECKOUT</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  container:{
    width: '90%',
    alignSelf: 'center',
  },
  screenTitle:{
    marginTop: 20,
    fontSize: 22,
    fontWeight: 500,
  },
  selectedProductContainer:{
    height: '100%'
  },
  productContainer:{
    flexDirection: 'row',
    alignItems: "center", 
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    width: '100%',
    height: 120,
    alignSelf: 'center',
    marginTop: 25,
  },
  imageContainer: {
    marginLeft: 10,
    width: '40%'
  },
  productImage: {
    height: 120, 
    width: "100%",
    marginLeft: -15,
    flex: 1,
    resizeMode: 'contain',
  },
  productInfoContainer: {
    flex: 1, 
  },
  priceRowContainer:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productName:{
    fontWeight: 600,
    fontSize: 14
  },
  productPrice:{
    fontSize: 14,
    fontWeight: 500,
  },
  productReq:{
    fontWeight: "normal",
    fontSize: 7,
    color: '#0CB669',
    marginTop: 5,
  },
  productQuantity:{
    fontSize: 14,
    fontWeight: 300,
  },
  xButtonWrapper: {
    position: 'absolute',
    top: 5,
    right: 5, 
    marginRight: 3,
    marginTop: 3,
  },
  checkBoxIcon:{
    marginRight: 10,
    width: 20, 
    height: 20,
  },
  quantityButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: 300,
  },
  separator:{
    marginTop: 20,
    height: 1,
    width: '85%',         
    backgroundColor: '#D9D9D9', 
    alignSelf: 'center'
  },
  checkoutContainer:{
    backgroundColor: 'white',
    position: "absolute",
    bottom: 70,
    borderRadius: 20,
    width: '100%',
    paddingVertical: 25,
    elevation: 2,

  },
  priceContainer:{
    flexDirection: 'row',
    alignSelf: 'center',
    width: '60%', 
    justifyContent: 'space-between',
  },
  delFeeContainer:{
    flexDirection: 'row',
    alignSelf: 'center',
    width: '60%', 
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalAmountContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '60%', 
    marginTop: 10,
    marginBottom: 20
  },
  checkoutText:{
    fontWeight: 700,
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  },
  checkoutWrapper:{
    backgroundColor: '#DC3642',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 20,
  },
  priceText:{
    fontWeight: 400,
    fontSize: 15
  },
  delFeeText:{
    fontWeight: 400,
    fontSize: 15
  },
  amountText:{
    fontWeight: 400,
    fontSize: 15
  },
  totalText:{
    fontWeight: 600,
    fontSize: 15,
    color: '#EC6F56',
  },
  totalAmountText:{
    fontWeight: 600,
    fontSize: 15,
    color: '#EC6F56'
  },
  button: {
    paddingHorizontal: 5,
  },
  quantityText: {
    marginHorizontal: 7,
    fontSize: 14,
    fontWeight: 500,
  },
  
});
