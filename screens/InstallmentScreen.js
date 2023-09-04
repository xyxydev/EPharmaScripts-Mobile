import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, Dimensions  } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";

const { width, height } = Dimensions.get("window");

const InstallmentScreen = () => {
    
    return (
      <View>
        <View style={styles.upperContainer}> 
            <Text style={styles.screenTitle}>Installment</Text>
            <Text style={styles.uptoText}>You can get up to</Text>
            <Text style={styles.amountText}>{"\u20B1"}10,000</Text>
        </View>

        <View style={styles.lowerContainer}> 
            <TouchableOpacity>
                <View style={styles.activateButton}>
                    <Text style={styles.activateText}>ACTIVATE NOW</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.benefitsText}>Benefits</Text>
            <View style={styles.benefitsInfoContainer}>
                <Text style={styles.boldTitle}>Buy Now Pay Later</Text>
                <Text style={styles.lightInfo}>Buy now and pay for the 5th of the next month</Text>

                <Text style={styles.boldTitle}>Installment Plan</Text>
                <Text style={styles.lightInfo}>Multiple installment options available with low interest rate</Text>

                <Text style={styles.boldTitle}>Easy Application, Fast Approval</Text>
                <Text style={styles.lightInfo}>Get a credit limit of up to ₱ 10,000 within 24 hours</Text>
            </View>

            <View style={styles.line} />
            <Text style={styles.howText}>How Installment Works</Text>
            <View style={styles.calendarBillingContainer}>  
                <Iconify icon="solar:calendar-outline" size={35} color="black"/>
                <Text style={styles.billingText}>Billing Date</Text>
            </View>
            <View style={styles.calendarBillingContainer}>  
                <View style={styles.verticalLine} />
                <Text style={styles.monthText}>Bill will be out by the 25th of the month</Text>
            </View>
        </View>
        

  
      </View>
    );
  };
  
  export default InstallmentScreen;

  const styles = StyleSheet.create({
    upperContainer:{
        backgroundColor: '#EC6F56',
        borderTopLeftRadius: 20,    
        borderTopRightRadius: 20,   
        height: 180,
    },
    screenTitle:{
        fontWeight: 600,
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        marginLeft: 20,
    },
    uptoText:{
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
        fontWeight: 400
    },
    amountText:{
        color: 'white',
        fontSize: 32,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 20,
    },
    lowerContainer:{
        backgroundColor: 'white',
        height: height,
    },
    line: {
        height: 0.5,
        width: "90%",
        backgroundColor: "black",
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 20,
    },
    activateText:{
        color: 'white',
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center'
    },
    activateButton:{
        backgroundColor: '#EC6F56',
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 30,
        paddingBottom: 15,
        width: 160, // Add a fixed width to control the button size
        alignSelf: 'center', // Center the button horizontally
    },
    benefitsText:{
        fontWeight: 600,
        fontSize: 16,
        marginLeft: 20,
        marginTop: 20,
    },
    boldTitle:{
        color: '#3A3A3A',
        fontWeight: 600,
        fontSize: 16,
        marginTop: 15,
    },
    lightInfo:{
        fontWeight: 300,
        fontSize: 14,
        marginTop: 15,
    },
    benefitsInfoContainer:{
        width: '80%',
        marginLeft: 40,
    },
    howText:{
        fontWeight: 600,
        fontSize: 16,
        marginLeft: 20,
        marginTop: 5,
    },
    calendarBillingContainer:{
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 30,
        alignItems: 'center', // Center vertical
        width: '80%',
    },
    billingText:{
        fontWeight: 600,
        fontSize: 16,
        marginLeft: 20,
        color: '#3A3A3A'
    },
    monthText:{
        fontSize: 16,
        fontWeight: 300,
        marginLeft: 38,
    },
    verticalLine: {
        height: '200%',
        width: 2,
        backgroundColor: "black",
        marginLeft: 15,
    },
    
    

    

    
  });
