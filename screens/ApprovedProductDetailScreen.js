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


const ApprovedProductDetailScreen = ({ navigation, route }) => {

    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;

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
                   
                    <Text style={styles.quantityText}>x1</Text>

                    <TouchableOpacity style={styles.removerOrderButton}>
                        <Text style={styles.removerOrderText}>Remove Order</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        </SafeAreaView>
    );
};
export default ApprovedProductDetailScreen;


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
    
    quantityText:{
        color: '#8E8E8E',
        fontWeight: 400,
        fontSize: 12,
        textAlign: 'right',
        marginTop: 20
    },
    removerOrderButton:{
        backgroundColor: '#DC3642',
        borderRadius: 30,
        padding: 20,
        position: 'absolute',
        bottom: -100,
        width: '100%'
    },
    removerOrderText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center'
    },
    
    
});
