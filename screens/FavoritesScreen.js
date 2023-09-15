import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, Dimensions  } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";


const { width, height } = Dimensions.get("window");
const cardWidth = (width - 30) / 2;

const ProductCard = ({ productName, productImageSource, productReq, productPrice }) => {
    return (
      <View style={[styles.productContainer, { width: cardWidth }]}>
        <View style={styles.productCard}>
          <Iconify icon="bi:x" size={22} color="black" style={styles.xButton} />
          <Image source={productImageSource} style={styles.productImage} />
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.productReq}>{productReq}</Text>
          <Text style={styles.productPrice}>{productPrice}</Text>
          <TouchableOpacity>
            <View style={styles.addButton}>
              <Text style={styles.addText}>Add to cart </Text>
              <Iconify icon="ic:outline-shopping-cart" size={17} color="white" style={styles.cartIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

  const FavoritesScreen = () => {
    // Sample data, replace this with your actual data from the database
    const products = [
      {
        productName: "Zynapse 1G Tablet",
        productImageSource: require("../assets/img/amlodipine.png"),
        productReq: "[ Requires Prescription ]",
        productPrice: '\u20B1' + "102.75", // PESO SIGN
      },
      // Add more product objects as needed
      
    ];
  
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Favorites</Text>
        <View style={styles.line} />
  
        <View style={styles.row}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </View>
      </View>
    );
  };
  
  export default FavoritesScreen;

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      paddingBottom: 20,
      borderTopLeftRadius: 20,     // Apply a border radius to the top left corner
      borderTopRightRadius: 20,    // Apply a border radius to the top right corner
      flex: 1,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    productContainer:{
        paddingHorizontal: 8,
        paddingVertical: 10,
        
    },
    productCard:{
        height: 230,
        borderRadius: 15,
        backgroundColor: "white",
        padding: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
    },
    screenTitle:{
        fontSize: 18,
        fontWeight: 600,
        marginTop: 20,
        marginLeft: 20,
    },
    line: {
        height: 0.5,
        width: "90%",
        backgroundColor: "#8E8E8E",
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 20,
    },
    productImage:{
        width: "90%",
        height: 100,
        marginBottom: -10,
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    productName:{
        fontWeight: 600,
        fontSize: 12,
        color: '#3C3C3C',
        textAlign: 'center'
    },
    productReq:{
        fontWeight: 300,
        fontSize: 7,
        color: '#0CB669',
        textAlign: 'center',
        marginTop: 5,
    },
    productPrice:{
        fontWeight: 600,
        fontSize: 15,
        color: 'black',
        textAlign: "center",
        marginTop: 10,
    },
    addButton:{
        flexDirection: 'row',
        backgroundColor: '#EC6F56',
        justifyContent: 'center', // Vertical centering
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
    },
    addText:{
        color: 'white',
        fontWeight: 600,
        fontSize: 12,
    },
    xButton:{
        marginTop: 3,
        marginLeft: 5,
        marginBottom: -15,
    },

    
  });
