import { View, Text, StyleSheet, Switch, Dimensions } from "react-native";
import React, { useState } from "react";
import { Iconify } from "react-native-iconify";
import DiarySwitchTabs from "../components/DiarySwitchTabs";

const DiaryMaintenanceScreen = () => {
  const [trackerTab, setTrackerTab] = useState(1);
  const onSelectSwitch = (value) => {
    setTrackerTab(value);
  }
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsEnabled((prevState) => !prevState);
  };
  const { width, height } = Dimensions.get("window");
  
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>DIARY MAINTENANCE</Text>

      <View>
        <DiarySwitchTabs 
          selectionMode={1}
          option1="Maintenance Tracker"
          option2="Stock Tracker"
          onSelectSwitch={onSelectSwitch}
          />
      </View>
      {trackerTab == 1 && 
        <View>
          <Text style={styles.takeText}>Time to take your medicines!</Text>
          <View style={styles.trackerContainerMT}>
            <Text style={styles.maintenanceName}>High blood maintenance</Text>
            <View style={styles.switchButtonContainer}>
              <Text  style={styles.timeText}>8:00 AM</Text>
              <Switch
                value={isNotificationsEnabled}
                onValueChange={toggleNotifications}
                trackColor={{ true: '#EC6F56', false: 'gray' }}
                thumbColor={isNotificationsEnabled ? 'white' : 'white'}
                style={{marginRight: 10}}
              />
            </View>
            <Text style={styles.whenText}>Daily</Text>
          </View>
        </View>
      }
      {trackerTab == 2 &&
        <View>
          <Text style={styles.takeText}>Your medicine is running out of stock!</Text>
          <View style={styles.trackerContainerST}>
            <Text style={styles.maintenanceName}>High blood maintenance</Text>
            <View style={styles.rowContainer}>
              <View style={styles.row}>
                <Text>Stocks left :</Text>
                <View style={styles.numberContainer}>
                  <Text style={styles.numberText}>4</Text>
                </View>
              </View>

              <View style={styles.row}>
                <Text>Medicine to take for today :</Text>
                <View style={styles.numberContainer}>
                  <Text>3</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      }
      <View style={styles.addButton}>
        <Iconify icon="ic:outline-add" size={30} color="white" />
      </View>
    </View>
  );
};

export default DiaryMaintenanceScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  screenTitle:{
    fontWeight: 500,
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  takeText:{
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 14,
    marginTop: 25,
    marginBottom: 25,
  },
  trackerContainerMT:{
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    height: 120,
    elevation: 3,
  },
  switchButtonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  maintenanceName:{
    fontSize: 15,
    fontWeight: 400,
    marginTop: 18,
    marginLeft: 30,
  },
  timeText:{
    fontWeight: 600,
    fontSize: 24,
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 5,
  },
  whenText:{
    fontWeight: 400,
    fontSize: 12,
    marginLeft: 30,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  addButton:{
    backgroundColor: 'black',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 50,
    zIndex: 1,
    position: 'absolute',
    bottom: 20
  },
  trackerContainerST:{
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    height: 180,
    elevation: 2,
  },
  rowContainer:{
    marginTop: 15,
    width: '80%',
    alignSelf: 'center',
    marginLeft: 15,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  numberContainer:{
    backgroundColor: '#F5F2F2',
    justifyContent: 'center',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 5,
    width: 50, // Set a fixed width for the number container
    justifyContent: 'center',
    alignItems: 'center', // Center the text horizontally and vertically
    borderRadius: 20,
  },
  

});