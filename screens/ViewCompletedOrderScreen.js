import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image} from "react-native";
import { Iconify } from "react-native-iconify";

const ViewCompletedOrderScreen = () => {

  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
    //{ height: deviceHeight-55}
  return (
    <View style={[styles.container,]}>
        <View style={styles.delAddressContainer}>
            <View>
                <Iconify icon="system-uicons:location" size={35} color="black" />
            </View>
            <View style={styles.delInfoContainer}>
                <Text style={styles.deliveryTitle}>Delivery Address</Text>
                <Text style={styles.customerName}>Xymer Serna</Text>
                <Text style={styles.customerNumber}>(+63) 9565784915</Text>
                <Text style={styles.customerAddress}>252- I Ascencion St., Sambag I
                Cebu City, Cebu, Visayas, 6000</Text>
            </View>
        </View>
        <View style={styles.separator} />

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
              <Text style={styles.productPrice}>{"\u20B1"}102.75</Text>
              <Text style={styles.productAmount}>x1</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator2} />

        <View style={styles.pmentContainer}>
            <Text style={styles.methodText}>Payment Method :</Text>
            <View style={styles.choseMethodTextContainer}>
                <Text style={styles.choseMethodText}>Cash on Delivery</Text>
            </View>
        </View>
        <View style={styles.separator2} />

        <View style={styles.pmentDetailsContainer}>
            <Text style={styles.pmentDetailsText}>Payment Details :</Text>
            <View style={styles.subtotalContainer}>
                <View style={styles.psSubtotalContainer}>
                    <Text style={styles.psSubtotalText}>Product Subtotal</Text>
                    <Text style={styles.psSubtotalText}>₱102.75</Text>
                </View>
                <View style={styles.psSubtotalContainer}>
                    <Text style={styles.psSubtotalText}>Shipping Subtotal</Text>
                    <Text style={styles.psSubtotalText}>₱50.00</Text>
                </View>
            </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.totalContainer}>
          <Text style={styles.totalPmentText}>Total Payment</Text>
          <Text style={styles.totalAmountText}>₱152.75</Text>
        </View>
      </View>
  );
};

export default ViewCompletedOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignSelf: 'center',
    width: '100%',
    heigh: '100%',
  },
  delAddressContainer:{
    width: '80%',
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center'
  },
  delInfoContainer:{
    marginLeft: 15,
    width: '85%',
  },
  deliveryTitle:{
    fontWeight: 600,
    fontSize: 13,
    marginBottom: 10,
  },
  customerName:{
    fontWeight: 300,
    fontSize: 13
  },
  customerNumber:{
    fontWeight: 300,
    fontSize: 13,
    marginTop: 3
  },
  customerAddress:{
    fontWeight: 300,
    fontSize: 13,
    marginTop: 3
  },
  separator:{
    marginTop: 20,
    height: 1,
    width: '85%',         
    backgroundColor: '#D9D9D9', 
    alignSelf: 'center'
  },
  separator2:{
    marginTop: 60,
    height: 1,
    width: '85%',         
    backgroundColor: '#D9D9D9', 
    alignSelf: 'center'
  },
  productContainer:{
    flexDirection: 'row',
    alignItems: "center", 
    paddingHorizontal: 16, 
    width: '80%',
    height: 120,
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1, 
  },
  productReq:{
    fontWeight: "normal",
    fontSize: 7,
    color: '#0CB669',
    marginTop: 5,
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
  pmentContainer:{
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  methodText:{
    fontWeight: 500,
    fontSize: 14
  },
  choseMethodTextContainer:{
    backgroundColor: '#8E8E8E',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    width: 'auto',
    maxWidth: '40%',
    evelation: 2,
  },
  choseMethodText:{
    fontSize: 12,
    fontWeight: 400,
    color: 'white',
    textAlign: 'center'
  },
  pmentDetailsContainer:{
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  pmentDetailsText:{
    fontWeight: 500,
    fontSize: 14
  },  
  subtotalContainer:{
    width: '80%',
    marginLeft: 50,
    marginTop: 10
  },
  psSubtotalContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  psSubtotalText:{
    fontSize: 15,
    fontWeight: 300
  },
  totalContainer:{
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalPmentText:{
    fontSize: 20,
    fontWeight: 600,
  },
  totalAmountText:{
    fontWeight: 700,
    color: '#EC6F56',
    fontSize: 20,
    marginRight: 11
  },
});