import React, { useState } from "react";
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


const ProductDetailScreen = ({ navigation, route }) => {

    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;

    //favorite tapped
    const [isFavorite, setIsFavorite] = useState(false);

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
    //{ height: deviceHeight}
    return (
        <SafeAreaView>
        <View style={[styles.container,{ height: deviceHeight}]}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/img/amlodipine.png")}
                    style={styles.image}
                />
            </View>
            <View style={[styles.productContentContainer, { height: deviceHeight}]}>
                <View style={styles.insideContentContainer}>
                    <View style={styles.productNameView}>
                        <Text style={styles.productNameText}>Zynapse 1G Tablet</Text>
                        <Iconify icon="mdi:heart" size={35} 
                            color={isFavorite ? '#EC6F56' : '#8E8E8E'}
                            onPress={()=> setIsFavorite(!isFavorite)}
                        />
                    </View>
                    <Text style={styles.productReq}>[ Requires Prescription ]</Text>
                    <Text style={styles.productPrice}>₱ 102.75</Text>
                    <Text style={styles.categoriesText}>Categories: Prescription, pwd, senior citizen </Text>
                    <View style={styles.productInformationView}>
                        <Text style={styles.productInformationText}>Product Information</Text>
                    </View>
                    <View style={styles.informationView}>
                        <Text style={styles.informationContent}>
                            {'          '}Zynapse 1G Tablet is a medication that contains pyritinol, 
                            which is a nootropic agent. It is commonly used to improve cognitive function, 
                            memory, and concentration in people with various neurological conditions, such 
                            as Alzheimer's disease, Parkinson's disease, and stroke.
                        </Text>
                    </View>
                    <View style={styles.quantityStockRow}>
                        <View style={styles.quantityButton}>
                            <TouchableOpacity onPress={handleDecrement} style={styles.button}>
                                <Iconify icon="ph:minus-fill" size={22} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <TouchableOpacity onPress={handleIncrement} style={styles.button}>
                                <Iconify icon="ph:plus-fill" size={22} color="black" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.stockText}>Stock: 50</Text>
                    </View>
                    <View style={styles.threeButtonsRow}>
                        <View style={styles.chatnowView}>
                            <Iconify icon="ant-design:message-outlined" size={19} color="#EC6F56"/>
                            <Text style={styles.chatnowText}>Chat now</Text>
                        </View>
                        <View style={styles.addtocartView}>
                            <Iconify icon="uil:cart" size={19} color="#EC6F56" />
                            <Text style={styles.addtocartText}>Add to cart</Text>
                        </View>
                        <View style={styles.buynowView}>
                            <Text style={styles.buynowText}>BUY NOW</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
        </SafeAreaView>
    );
};
export default ProductDetailScreen;


const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignSelf: 'center'
    },
    imageContainer:{
        width: '70%',
        alignSelf: 'center',
        marginTop: 15,
    },
    image:{
        width: '100%',
        resizeMode: 'contain',
    },
    productContentContainer:{
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    insideContentContainer:{
        width: '85%',
        alignSelf: 'center'
    },
    productNameView:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    productNameText:{
        fontWeight: 600,
        fontSize: 20,

    },
    productReq:{
        fontWeight: 400,
        fontSize: 10,
        color: '#0CB669',
        marginTop: 10,
    },
    productPrice:{
        fontWeight: 600,
        fontSize: 24,
        textAlign: 'right',
        marginTop: 10,
    },
    categoriesText:{
        color: '#8E8E8E',
        fontSize: 11,
        fontWeight: 400,
        marginTop: 10,
    },
    productInformationText:{
        fontSize: 11,
        fontWeight: 600,
        color: 'white',
        textAlign: 'center'
    },
    productInformationView:{
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 15,
        marginTop: 30,
        width: '50%'

    },
    informationView:{
        backgroundColor: '#F5F5F5',
        padding: 20,
        marginTop: 30,
        borderRadius: 10,
    },
    informationContent:{
        fontSize: 10,
        fontWeight: 400,
        color: '#4E4E4E',
        textAlign: 'justify',
        lineHeight: 16,
    },
    quantityButton: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
        backgroundColor: '#F5F5F5',
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
    },
    quantityText: {
        fontSize: 14,
        fontWeight: 300,
        textAlign: 'center'
    },
    button: {
        paddingHorizontal: 5,
    },
    stockText:{
        color: '#8E8E8E',
        fontWeight: 400,
        fontSize: 12
    },
    quantityStockRow:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop: 30,
    },
    chatnowView:{
        borderColor: '#EC6F56',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: "center", 
        alignItems: "center", 
        width: '33%',
        padding: 10,
        marginRight: 10
    },
    chatnowText:{
        fontSize: 12,
        fontWeight: 600,
        color: '#EC6F56'
    },
    addtocartView:{
        borderColor: '#EC6F56',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: "center", 
        justifyContent: "center", 
        padding: 10,
        width: '38%',
        marginRight: 10
    },
    addtocartText:{
        fontSize: 12,
        fontWeight: 600,
        color: '#EC6F56',
    },
    buynowView:{
        backgroundColor: '#DC3642',
        borderRadius: 15,
        padding: 10,
        alignItems: "center", 
        justifyContent: "center", 
        padding: 10,
        width: '40%',

    },
    buynowText:{
        color: 'white',
        fontSize: 14,
        fontWeight: 600,
    },
    threeButtonsRow:{
        flexDirection: 'row',
        marginTop: 20,
        width: '85%',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: -80
        
    },
    

 
    
});
