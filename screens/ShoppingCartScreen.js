import { View, Text, StyleSheet, Dimensions, Image, Button } from "react-native";
import React, { useState } from "react";
import { Iconify } from "react-native-iconify";
import { Checkbox } from "expo-checkbox";
import { TouchableOpacity } from "react-native-gesture-handler";


const ShoppingCartScreen = () => {
  // State for the checkbox
  const [isChecked, setIsChecked] = useState(false); 
  //const QuantityButton = ({ quantity, onIncrement, onDecrement });

  return (
    <View style={styles.container}>
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
                    <Button
                      onPress={onDecrement}
                      title="-"
                      color="red"
                      size="small"
                      disabled={quantity === 1}
                    />
                        <Text style={styles.quantityText}>{quantity}</Text>
                    <Button
                      onPress={onIncrement}
                      title="+"
                      color="green"
                      size="small"
                    />
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
           
            <View style={styles.proceedButtonContainer}>
              <TouchableOpacity style={styles.proceedButton}>
                <Text style={styles.proceedText}>Proceed to payment</Text>
                <Iconify icon="iconoir:nav-arrow-right" size={22} color="white" />
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
    flex: 1,
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
    flex: 1, 
  },
  productImage: {
    height: 120, 
    width: "100%",
    marginLeft: -15,
  },
  productInfoContainer: {
    flex: 1, 
  },
  priceRowContainer:{
    marginTop: 20,
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
});
