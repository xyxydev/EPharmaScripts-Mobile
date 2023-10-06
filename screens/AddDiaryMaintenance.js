import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ToastAndroid, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";
import DateTimePicker from '@react-native-community/datetimepicker';
import { collection, addDoc, Timestamp, doc } from "firebase/firestore"; 
import { db } from "../firebase/firebase";
import { getAuthToken } from "../src/api/authToken";
import { useNavigation } from "@react-navigation/native";

const AddDiaryMaintenanceScreen = () => {
  const navigation = useNavigation();

  const [userId, setUserId] = useState(null); // State to store the user ID

  const [alarmTimes, setAlarmTimes] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSelectedAlarm, setShowSelectedAlarm] = useState(false);

  const [selectedAlarmTime, setSelectedAlarmTime] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const daysOfWeek = ["S", "M", "T", "W", "TH", "F", "ST"];

  useEffect(() => {
    // Fetch the user ID when the component mounts
    async function fetchUserId() {
      try {
        const authToken = await getAuthToken();
        setUserId(authToken.userId);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    }

    fetchUserId();
  }, []);

  const handleSetAlarmTime = () => {
    setShowDatePicker(true);
  };

  //
  const handleDaySelect = (day) => {
    const updatedDays = [...selectedDays];
    if (updatedDays.includes(day)) {
      updatedDays.splice(updatedDays.indexOf(day), 1);
    } else {
      updatedDays.push(day);
    }
    setSelectedDays(updatedDays);
  };

  //
  const handleDateTimeChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios"); // Close the picker on iOS

    if (selectedDate) {
      setSelectedAlarmTime(selectedDate); // Store the selected alarm time
      setAlarmTimes((prevAlarmTimes) => [...prevAlarmTimes, selectedDate]);
    }
  };

  // Function to handle the delete action
  const handleDeleteAlarm = (index) => {
    // Create a copy of the alarmTimes array
    const updatedAlarmTimes = [...alarmTimes];
    
    // Remove the alarm at the specified index
    updatedAlarmTimes.splice(index, 1);

    // Update the alarmTimes state with the modified array
    setAlarmTimes(updatedAlarmTimes);
  };


  //schedule
  const getRepetitionText = () => {
    const numSelectedDays = selectedDays.length;
    if (numSelectedDays === 0) return "Set schedule";
    if (numSelectedDays === 1) return "Once";
    if (numSelectedDays === 7) return "Daily";
    return "Custom";
  };

  //store data to the variable from TextInputs
  const [alarmName, setAlarmName] = useState('');
  const [alarmDescription, setAlarmDescription] = useState('');
  const [medicineStock, setMedicineStock] = useState('');
  
  //clear input fields
  const clearInputFields = () => {
    setAlarmName('');
    setAlarmDescription('');
    setMedicineStock('');
    setSelectedAlarmTime(null);
    setAlarmTimes([]); // Clear the alarmTimes array
  };

  //insert data to firestore 
  const create = async () => {
    try {
      // Check if the user ID is available
      if (!userId) {
        console.error("User ID not available.");
        return;
      }
  
      // Create a Firestore Timestamp object from selectedAlarmTime
      const alarmTime = selectedAlarmTime ? Timestamp.fromDate(selectedAlarmTime) : null;

       // Create an array to store the selected days as numbers
      const selectedDaysNumbers = selectedDays.map((day) => daysOfWeek.indexOf(day));
  
      // Create a new diaryMaintenance document
      const docRef = await addDoc(collection(db, "diaryMaintenance"), {
        userId: userId, // Insert the user ID into the Firestore document
        alarmName: alarmName,
        alarmDescription: alarmDescription,
        medicineStock: medicineStock,
        alarmSched: selectedDaysNumbers, // Store the selected days as an array of numbers
      });
  
      // Add alarms to the "diaryAlarms" collection
      for (const alarm of alarmTimes) {
        await addDoc(collection(db, "diaryAlarms"), {
          alarmTime: Timestamp.fromDate(alarm),
          diaryMaintenanceId: docRef.id, // Reference to the diaryMaintenance document
          switchState: false, // Default switch state to false
        });
      }
  
      clearInputFields();
  
      // Show a "Saved!" message
      ToastAndroid.show('Diary saved!', ToastAndroid.SHORT); 
      console.log('Data submitted to Firestore');
  
      navigation.goBack();
  
    } catch (error) {
  
      // Show error message
      ToastAndroid.show('Diary creation failed!', ToastAndroid.LONG); 
      console.error(error);
    }
  };
  

 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>New maintenance & Stock</Text>
      <View style={styles.diaryContainer}>
        <View style={styles.mainteNameView}>
          <Text style={styles.mainteNameText}>Maintenance name : </Text>
          <View style={styles.mainteInputView}>
            <TextInput style={styles.placeholderStyle} placeholder="Alarm name..."
              value={alarmName}
              onChangeText={(alarmName) => {setAlarmName(alarmName)}}
            />
          </View>
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>Description :</Text>
          <View style={styles.descriptionInputView}>
            <TextInput style={styles.placeholderStyle} placeholder="Alarm description..." 
              value={alarmDescription}
              onChangeText={(alarmDescription) => {setAlarmDescription(alarmDescription)}}
            />
          </View>
        </View>

        <View style={styles.setAlarmNoteView}>
          <View style={styles.setAlarmView}>
            <Text
              style={styles.setAlarmText}
              onPress={() => {
                handleSetAlarmTime();
                setShowSelectedAlarm(true);
              }}
            >
              Set alarm
            </Text>
          </View>
          <Text style={styles.alarmNoteText}>
            Press this set button to set alarms
          </Text>
        </View>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()} // Initialize with the current date
            mode="time" // Set the mode to "time"
            is24Hour={true}
            display="default"
            onChange={handleDateTimeChange}
          />
        )}

        <View style={styles.alarmsView}>
          <Text style={styles.alarmsText}>Alarms</Text>
          {alarmTimes.length === 0 ? (
            <Text style={styles.noAlarmsText}>No alarms yet</Text>
          ) : (
            <View>
              {alarmTimes.map((alarm, index) => (
                <View key={index} style={styles.alarmContainer}>
                  <Text style={styles.alarmTimeText}>
                    {alarm.getHours()}:{String(alarm.getMinutes()).padStart(2, '0')} {alarm.getHours() >= 12 ? 'PM' : 'AM'}
                  </Text>
                  <TouchableOpacity style={styles.deleteIcon}
                    onPress={() => handleDeleteAlarm(index)}
                  >
                    <Iconify icon="ic:outline-delete" size={30} color="#DC3642" />
                  </TouchableOpacity>
                </View>

              ))}
            </View>
          )}
        </View>

        <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleText}>Schedules</Text>
            <Text style={styles.repetitionText}>{getRepetitionText()}</Text>
            <View style={styles.daysOfWeek}>
              {daysOfWeek.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(day) && styles.selectedDay,
                  ]}
                  onPress={() => handleDaySelect(day)}
                >
                  <Text style={[styles.dayText, selectedDays.includes(day) && styles.selectedDayText]}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
        </View>


        <View style={styles.stockView}>
          <View style={styles.medStockView}>
            <Text style={styles.medStockText}>Medicine stock :</Text>
            <View style={styles.stockInputView}>
               <TextInput style={styles.stockPlaceholderStyle} placeholder="0" 
                value={medicineStock}
                onChangeText={(medicineStock) => {setMedicineStock(medicineStock)}}
               />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={create}
        >
          <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default AddDiaryMaintenanceScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  diaryContainer:{
    width: '90%',
    alignSelf: 'center'
  },
  screenTitle:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 600,
    marginTop: 20,

  },
  mainteNameText:{
    fontSize: 14,
    fontWeight: 500,
  },
  mainteNameView:{
    marginTop: 25,
  },
  mainteInputView:{
    marginTop: 10,
    borderWidth: .5,
    borderColor: "rgb(128, 128, 128)",
    borderRadius: 10,

  },
  placeholderStyle:{
    marginLeft: 20,
    marginVertical: 3
  },
  stockView:{
    marginTop: 30
  },
  medStockView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  stockInputView:{
    marginTop: 10,
    borderWidth: .5,
    borderColor: "rgb(128, 128, 128)",
    borderRadius: 10,
    width: '45%',
  },
  stockPlaceholderStyle:{
    marginVertical: 1,
    textAlign: 'center',
  },
  medStockText:{
    fontSize: 14,
    fontWeight: 500,
  },
  descriptionView:{
    marginTop: 15,
    marginBottom: 20
  },
  descriptionText:{
    fontSize: 14,
    fontWeight: 500,
  },
  descriptionInputView:{
    marginTop: 10,
    borderWidth: .5,
    borderColor: "rgb(128, 128, 128)",
    borderRadius: 10,
  },
  descriptionPlaceholderStyle:{
    marginLeft: 20,
    marginVertical: 3
  },
  setAlarmView:{
    alignItems: 'center',
    backgroundColor: '#3C3C3C',
    width: '30%',
    padding: 10,
    borderRadius: 25
  },
  setAlarmNoteView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15

  },
  setAlarmText:{
    color: 'white',
    fontSize: 14
  },
  alarmsView:{
    marginTop: 25,
    marginLeft: 10,
  },
  alarmsText:{
    fontSize: 16,
    fontWeight: 500,
  },
  alarmNoteText:{
    color: '#8E8E8E',
    fontSize: 12,
    fontWeight: 400,
    marginRight: 40,
  },

  daysOfWeek: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
  },
  selectedDay: {
    backgroundColor: "#3C3C3C", 

  },
  selectedDayText:{
    color: 'white'
  },
  dayText: {
    fontSize: 13,
    color: '#3C3C3C'
  },
  //
  scheduleContainer:{
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 20,
    marginTop: 30

  },
  scheduleText:{
    fontSize: 14,
    fontWeight: 400
  },
  repetitionText:{
    color: '#EC6F56',
    fontSize: 13,
    fontWeight: 300,
    marginTop: 5,
    marginBottom: -5
  },
  //
  selectedTimeView:{
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 20,
    padding: 10,
    height: '23%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addButton:{
    backgroundColor: 'red',
    width: '17%',
    padding: 15,
    borderRadius: 20, 
  },
  addText:{
    color: 'white',
  },
  noAlarmsText:{
    color: '#8E8E8E',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  //
  alarmContainer:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 2,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 20,
    padding: 15,
    width: '95%',
    alignSelf: 'center'

  },
  alarmTimeText:{
    fontWeight: 400,
    fontSize: 20,
    marginLeft: 25,
    color: '#3C3C3C'
  },
  deleteIcon:{
    marginRight: 25
  },

});