import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ToastAndroid, ScrollView } from "react-native";
import { Iconify } from "react-native-iconify";
import DateTimePicker from '@react-native-community/datetimepicker';
import { collection, getDoc, query, getDocs, doc, where, 
         updateDoc, Timestamp, deleteDoc, addDoc 
} from "firebase/firestore"; 
import { db } from "../firebase/firebase";
import { getAuthToken } from "../src/api/authToken";
import { useNavigation, useRoute } from "@react-navigation/native";

const UpdateDiaryMaintenance = () => {
    const navigation = useNavigation();
    //
    const [alarmTimes, setAlarmTimes] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showSelectedAlarm, setShowSelectedAlarm] = useState(false);

    const [selectedAlarmTime, setSelectedAlarmTime] = useState(null);
    const [selectedDays, setSelectedDays] = useState([]);
    const daysOfWeek = ["S", "M", "T", "W", "TH", "F", "ST"];

    const handleSetAlarmTime = () => {
        setShowDatePicker(true);
    };

    const handleDateTimeChange = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === "ios"); // Close the picker on iOS

        if (selectedDate) {
        setSelectedAlarmTime(selectedDate); // Store the selected alarm time
        setAlarmTimes((prevAlarmTimes) => [...prevAlarmTimes, selectedDate]);
        }
    };

    //const 
    route = useRoute();
    const { diaryID, userID } = route.params;

    const [alarmsData, setAlarmsData] = useState([]);

    // State to hold fetched data
    const [diaryMaintenanceData, setDiaryMaintenanceData] = useState({
        alarmName: "",
        alarmDescription: "",
        alarmSched: [],
        alarmTime:[],
        medicineStock: "",
    });
    //schedule
  const getRepetitionText = () => {
    const numSelectedDays = selectedDays.length;
    if (numSelectedDays === 0) return "Set schedule";
    if (numSelectedDays === 1) return "Once";
    if (numSelectedDays === 7) return "Daily";
    return "Custom";
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

    // Function to add a fetched alarm time to the alarmTimes array
    const addFetchedAlarmTime = (fetchedAlarmTime) => {
      setAlarmTimes((prevAlarmTimes) => [...prevAlarmTimes, fetchedAlarmTime]);
    };

    const deleteDiaryAlarm = async (alarmTime) => {
      try {
        // Query the diaryAlarms collection for the specific alarm time
        const diaryAlarmsCollectionRef = collection(db, "diaryAlarms");
        const querySnapshot = await getDocs(
          query(
            diaryAlarmsCollectionRef,
            where("diaryMaintenanceId", "==", diaryID),
            where("alarmTime", "==", Timestamp.fromDate(alarmTime))
          )
        );
    
        // Delete the matching documents
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
      } catch (error) {
        console.error("Error deleting diaryAlarms document: ", error);
      }
    };
    
    const handleDeleteAlarm = (index) => {
      // Create a copy of the alarmTimes array
      const updatedAlarmTimes = [...alarmTimes];
    
      // Get the alarm time at the specified index
      const deletedAlarmTime = updatedAlarmTimes[index];
    
      // Remove the alarm at the specified index
      updatedAlarmTimes.splice(index, 1);
    
      // Update the alarmTimes state with the modified array
      setAlarmTimes(updatedAlarmTimes);
    
      // Check if the deleted alarm time is fetched or newly created
      if (index < alarmsData.length) {
        // It's a fetched alarm, so delete the associated diaryAlarms document
        deleteDiaryAlarm(deletedAlarmTime);
      }
    };
    

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Reference to the Firestore document for diary maintenance
            const diaryDocRef = doc(db, "diaryMaintenance", diaryID);
            const docSnap = await getDoc(diaryDocRef);
      
            if (docSnap.exists()) {
              const data = docSnap.data();
              // Log the fetched data to the console for debugging
              // console.log("Fetched Data:", data);
      
              // Update the state with fetched data
              setDiaryMaintenanceData({
                alarmName: data.alarmName,
                alarmDescription: data.alarmDescription,
                alarmSched: data.alarmSched,
                medicineStock: data.medicineStock,
                // ... (other fields)
              });

              // Convert the numeric alarmSched values to day strings
              const selectedDaysFromAlarmSched = data.alarmSched.map(
                (numericDay) => daysOfWeek[numericDay]
              );

              // Update the selectedDays state with the converted array
              setSelectedDays(selectedDaysFromAlarmSched);
      
              // Fetch data from diaryAlarms collection based on diaryMaintenanceId
              const diaryAlarmsCollectionRef = collection(db, "diaryAlarms");
              const querySnapshot = await getDocs(
                query(
                  diaryAlarmsCollectionRef,
                  where("diaryMaintenanceId", "==", diaryID)
                )
              );
      
              const alarmsData = [];
                querySnapshot.forEach((doc) => {
                const alarmData = doc.data();
                // Convert alarmTime to a JavaScript Date object
                const alarmTime = alarmData.alarmTime.toDate();
                // Format the alarmTime as HH:MM AM/PM
                const formattedAlarmTime =
                    `${alarmTime.getHours()}:${String(alarmTime.getMinutes()).padStart(2, '0')}` +
                    ` ${alarmTime.getHours() >= 12 ? 'PM' : 'AM'}`;
                alarmData.alarmTime = formattedAlarmTime;
                alarmsData.push(alarmData);

                 // Add the fetched alarm time to the alarmTimes array
                addFetchedAlarmTime(alarmTime);
                });

                // Set the alarmsData state
                setAlarmsData(alarmsData);
      
              // Now, alarmsData contains the alarms related to this diaryMaintenanceId
              // You can set it in your state or handle it as needed
              //console.log("Alarms Data:", alarmsData);
            } else {
              console.error("Document does not exist");
              // Handle the case where the document does not exist
            }
          } catch (error) {
            console.error("Error fetching data: ", error);
            // Handle error (e.g., show a toast)
            ToastAndroid.show("Error fetching data", ToastAndroid.LONG);
          }
        };
      
        fetchData();
      }, [diaryID, userID]);

    // Function to map numeric values to day strings
    const mapNumericToDay = (numericDay) => {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysOfWeek[numericDay];
    };
      
    // Calculate selected days based on alarmSched
    const selectedDaysText = diaryMaintenanceData.alarmSched
    .sort((a, b) => a - b) // Sort the numeric days in ascending order
    .map((numericDay) => mapNumericToDay(numericDay))
    .join(", ");

    // Function to update the Firestore document and insert alarm times
  // Function to update the Firestore document and replace alarm times
    const updateDiary = async () => {
      try {
        // Reference to the Firestore document for diary maintenance
        const diaryDocRef = doc(db, "diaryMaintenance", diaryID);

        // Prepare the data to update the document
        const updatedData = {
          alarmName: diaryMaintenanceData.alarmName,
          alarmDescription: diaryMaintenanceData.alarmDescription,
          alarmSched: selectedDays.map((day) => daysOfWeek.indexOf(day)),
          medicineStock: diaryMaintenanceData.medicineStock,
          // ... (other fields)
        };

        // Delete all existing documents in the diaryAlarms collection for this diaryID
        const diaryAlarmsCollectionRef = collection(db, "diaryAlarms");
        const querySnapshot = await getDocs(
          query(diaryAlarmsCollectionRef, where("diaryMaintenanceId", "==", diaryID))
        );

        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        // Insert alarm times into the diaryAlarms collection
        for (const alarm of alarmTimes) {
          await addDoc(diaryAlarmsCollectionRef, {
            diaryMaintenanceId: diaryID, // Reference to the diaryMaintenance document
            alarmTime: Timestamp.fromDate(alarm),
            switchState: true, // Default switch state to true
          });
        }

        // Update the document with the new data
        await updateDoc(diaryDocRef, updatedData);

        // Display success messages
        ToastAndroid.show("Data updated successfully", ToastAndroid.LONG);
        ToastAndroid.show("Alarm times replaced successfully", ToastAndroid.LONG);

        navigation.goBack();
      } catch (error) {
        console.error("Error updating data or replacing alarm times: ", error);
        // Handle error (e.g., show an error message)
        ToastAndroid.show("Error updating data or replacing alarm times", ToastAndroid.LONG);
      }
    };


    
    
      


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Edit maintenance & stock</Text>
      <View style={styles.diaryContainer}>
        <View style={styles.mainteNameView}>
          <Text style={styles.mainteNameText}>Maintenance name : </Text>
          <View style={styles.mainteInputView}>
          <TextInput
            style={styles.placeholderStyle}
            placeholder="Alarm name..."
            value={diaryMaintenanceData.alarmName} 
            onChangeText={(text) => {
                
                setDiaryMaintenanceData((prevData) => ({
                ...prevData,
                alarmName: text,
                }));
            }}
            />
          </View>
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>Description :</Text>
          <View style={styles.descriptionInputView}>
            <TextInput
            style={styles.placeholderStyle}
            placeholder="Alarm description..."
            value={diaryMaintenanceData.alarmDescription} 
            onChangeText={(text) => {
                
                setDiaryMaintenanceData((prevData) => ({
                ...prevData,
                alarmDescription: text,
                }));
            }}
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
          {alarmTimes.length > 0 ? (
            <View>
              {alarmTimes.map((alarm, index) => (
                <View key={index} style={styles.alarmContainer}>
                    <Text style={styles.alarmTimeText}>
                        {alarm.getHours()}:{String(alarm.getMinutes()).padStart(2, '0')} {alarm.getHours() >= 12 ? 'PM' : 'AM'}
                        
                    </Text>
                    <TouchableOpacity
                        style={styles.deleteIcon}
                        onPress={() => handleDeleteAlarm(index)}
                    >
                        <Iconify icon="ic:outline-delete" size={30} color="#DC3642" />
                    </TouchableOpacity>
                </View>

              ))}
            </View>
          ) : (
            
            <Text style={styles.noAlarmsText}>No alarms yet</Text>

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
               <TextInput
                style={styles.stockPlaceholderStyle}
                placeholder="0"
                value={diaryMaintenanceData.medicineStock} 
                onChangeText={(text) => {
                    
                    setDiaryMaintenanceData((prevData) => ({
                    ...prevData,
                    medicineStock: text,
                    }));
                }}
                />
            </View>
          </View>
        </View>

        <TouchableOpacity
            style={styles.addButton}
            onPress={updateDiary} // Call the update function when the button is pressed
        >
            <Text style={styles.addText}>UPDATE</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default UpdateDiaryMaintenance;

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
    width: '24%',
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
  schedAndClearView:{
    flexDirection: 'row', 
    justifyContent: 'space-between',

  },
  clearButton:{
    fontSize: 13,
    marginRight: 10,
    color: '#8E8E8E',


  },

  

});