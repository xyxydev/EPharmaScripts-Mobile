import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import IconFeather from "react-native-vector-icons/Feather";
import ImagePicker from 'react-native-image-picker';



const styles = StyleSheet.create({
    wholeContainer:{
      backgroundColor: 'white',
      paddingBottom: 400,
      borderRadius: 20,
    },
    upperContainer:{
      alignItems: 'center', // Align items vertically
      justifyContent: 'center', // Center items horizontally
    },
    lowerContainer:{
      width: '80%',
      marginTop: 30,
      marginLeft: 40,
    },
    title:{
        fontWeight: 600,
        fontSize: 18,
        marginTop: 20,
    },
    pic_cont:{
        width: 120,
        height: 120,
        marginTop:7,
    },
    camera:{
        backgroundColor: '#EC6F56', 
        padding: 7, 
        borderRadius: 24, 
        marginVertical: -33,
        marginLeft: 80,
    },
    label:{
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 6,
    },
    infoCont:{
        backgroundColor: '#F5F2F2',
        padding: 10,
        borderRadius: 20,
        marginVertical: 5,
    },
    info:{
        fontSize: 14,
        fontWeight: 400,
        marginLeft: 10,
    },
    labelInfoCont:{
        marginVertical: 4,
    },
    birthdateCont:{
        flexDirection: 'row',
        backgroundColor: '#F5F2F2',
        padding: 10,
        borderRadius: 20,
        marginVertical: 5,
        justifyContent: 'space-between', 
        alignItems: 'center',
    }
    
  });
const EditProfileScreen = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleCameraIconClick = () => {
        const options = {
        title: 'Select Photo',
        cancelButtonTitle: 'Cancel',
        takePhotoButtonTitle: 'Take Photo...',
        chooseFromLibraryButtonTitle: 'Choose from Library...',
        mediaType: 'photo',
        quality: 1,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
            skipBackup: true,
        },
        };

    ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            setSelectedImage(response.uri);
        }
        });
    };

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.pic_cont}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.pic_cont} className="w-full h-full rounded-full"/>
          ) : (
            <Image
              source={require("../assets/img/cymer.jpg")}
              style={styles.pic_cont} className="w-full h-full rounded-full"
            />
          )}
        </View>
        <TouchableOpacity onPress={handleCameraIconClick}>
            <IconSimple style={styles.camera} name="camera" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.lowerContainer}>
            <View style={styles.labelInfoCont}>  
                <Text style={styles.label}>Name</Text>
                <View style={styles.infoCont}>
                    <Text style={styles.info}>Xyxy Pinakurat</Text>
                </View>
            </View>
            <View style={styles.labelInfoCont}>  
                <Text style={styles.label}>Phone</Text>
                <View style={styles.infoCont}>
                    <Text style={styles.info}>09876543210</Text>
                </View>
            </View>
            <View style={styles.labelInfoCont}>  
                <Text style={styles.label}>Gender</Text>
                <View style={styles.infoCont}>
                    <Text style={styles.info}>Male</Text>
                </View>
            </View>
            <View style={styles.labelInfoCont}>  
                <Text style={styles.label}>Birthdate</Text>
                <View style={styles.birthdateCont}>
                    <Text style={styles.info}></Text>
                    <IconFeather style={{  marginRight: 20,}} name="calendar" size={22} color="#4E4E4E" />
                </View>
            </View>
            <View style={styles.labelInfoCont}>  
                <Text style={styles.label}>Valid ID</Text>
                <View style={styles.infoCont}>
                    <Text style={styles.info}></Text>
                </View>
            </View>
      </View>


    </View>

   
  );
};

export default EditProfileScreen;