import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Checkbox } from "expo-checkbox";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import {
  StyledContainer,
  InnerContainer,
  SignupPageLogo,
  SignupPageTitle,
  Subtitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  ExtraView,
  Extratext,
  TextLink,
  TextLinkContent,
} from "../components/styles";

//colors
const { darkLight } = Colors;
const { orange } = Colors;
//date-time picker
import DateTimePicker from "@react-native-community/datetimepicker";

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

//firebase
import { authentication, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  updateDoc,
  where,
  getFirestore,
} from "firebase/firestore/lite";

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  // State for the checkbox
  const [isChecked, setIsChecked] = useState(false);

  //actual date of birth to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  //text input states
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  //error message
  const [error, setError] = useState(null);

  // State variable for error message
  useEffect(() => {
    let timeoutId;
    if (error) {
      // Set a timeout to clear the error message after 3 seconds
      timeoutId = setTimeout(() => {
        setError(null);
      }, 4000);
    }
    // Clear the timeout when the component unmounts or the error state changes
    return () => clearTimeout(timeoutId);
  }, [error]);

  // Regular expressions for validation
  const nameRegex = /^[A-Za-z]+$/; // Only alphabetic characters allowed
  const emailRegex = /^\S+@\S+\.\S+$/; // Email format validation
  const phoneRegex = /^09\d{9}$/; // Phone number format validation: starts with 09, followed by 9 digits
  const passwordRegex = /^[A-Za-z0-9]{8,}$/; // At least 8 characters or digits

  //Create user
  const RegisterUser = async () => {
    const fName = firstName;
    const lName = lastName;
    const userEmail = email;
    const userPhone = phone;
    const userPassword = password;
    const userconfirmPassword = confirmPassword;
    const userCreatedAt = serverTimestamp(); // Add the createdAt field with the current server timestamp

    const userData = {};

    //check if terms and conditions is checked
    if (!isChecked) {
      setError("Please agree to the Terms & Conditions");
      return;
    }
    // Check if email already exists
    const usersRef = collection(db, "users");
    const emailExistsQuery = query(usersRef, where("email", "==", userEmail));

    try {
      const emailExistsSnapshot = await getDocs(emailExistsQuery);

      if (!emailExistsSnapshot.empty) {
        setError("Email address already exists");
        return;
      }

      // ... continue with the rest of the code ...
    } catch (error) {
      console.error("Error checking email existence:", error);
      // Handle the error as needed
    }

    // Validate and set field values in the userData object
    if (nameRegex.test(fName)) {
      userData.firstName = fName;
    } else {
      setError("Invalid First Name");
      return;
    }

    if (nameRegex.test(lName)) {
      userData.lastName = lName;
    } else {
      setError("Invalid Last Name");
      return;
    }

    if (emailRegex.test(userEmail)) {
      userData.email = userEmail;
    } else {
      setError("Invalid email address");
      return;
    }

    if (phoneRegex.test(userPhone)) {
      userData.phone = userPhone;
    } else {
      setError("Invalid phone number");
      return;
    }

    // Validate the password
    if (passwordRegex.test(userPassword)) {
      userData.password = userPassword;
    } else {
      setError("Password should be at least 8 characters");
      return;
    }

    // Validate the confirm password
    if (userPassword === userconfirmPassword) {
      userData.confirmPassword = userconfirmPassword;
    } else {
      setError("Password do not match");
      return;
    }

    userData.dateOfBirth = dob;
    userData.createdAt = userCreatedAt;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        authentication,
        userEmail,
        userPassword
      );
      const uid = userCredential.user.uid; // Get the user ID from the UserCredential object

      const db = getFirestore(); // Get the Firestore instance
      const usersCollection = collection(db, "users"); // Replace 'users' with your actual collection name

      // Set the user ID as the document ID when adding the user to Firestore
      const userRef = doc(usersCollection, uid);
      await setDoc(userRef, userData);

      console.log("User added successfully with ID:", uid);
      setError("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error);
      setError("Error adding user");
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <StyledContainer>
          <StatusBar style="dark" />
          <InnerContainer>
            {/* <SignupPageLogo
              resizeMode="cover"
              source={require("../assets/img/e-logo.png")}
            /> */}
            <Subtitle style={{ marginTop: 20, marginBottom: 5 }}>
              Welcome to E-PharmaScripts
            </Subtitle>
            <View style={{ flex: 1, alignItems: "center" }}>
              {error && <MsgBox style={{ marginBottom: -15 }}>{error}</MsgBox>}
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                dateOfBirth: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                console.log(values);
                RegisterUser();
                navigation.navigate("Login");
              }}
            >
              {({ handleChange, handleBlur, values }) => (
                <StyledFormArea style={{ marginTop: 15 }}>
                  <MyTextInput
                    icon="person"
                    //   label="Username"
                    placeholder="First Name"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("firstname")}
                    onChangeText={(text) => setFName(text)}
                    onBlur={handleBlur("firstname")}
                    value={firstName}
                  />
                  <MyTextInput
                    icon="person-fill"
                    //   label="Full Name"
                    placeholder="Last Name"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("lastname")}
                    onChangeText={(text) => setLName(text)}
                    onBlur={handleBlur("lastname")}
                    value={lastName}
                  />
                  <MyTextInput
                    icon="mail"
                    //   label="Email Address"
                    placeholder="Email"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("email")}
                    onChangeText={(email) => setEmail(email)}
                    onBlur={handleBlur("email")}
                    value={email}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    icon="device-mobile"
                    placeholder="Phone Number"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("phone")}
                    onChangeText={(number) => setPhone(number)}
                    onBlur={handleBlur("phone")}
                    value={phone}
                  />
                  <MyTextInput
                    icon="calendar"
                    //   label="Date of Birth"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("dateOfBirth")}
                    onBlur={handleBlur("dateOfBirth")}
                    value={dob ? dob.toDateString() : ""}
                    isDate={true}
                    editable={false}
                    showDatePicker={showDatePicker}
                    selectionColor="black"
                  />
                  <MyTextInput
                    icon="lock"
                    //   label="Password"
                    placeholder="Enter Password"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("password")}
                    onChangeText={(text) => setPassword(text)}
                    onBlur={handleBlur("password")}
                    value={password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <MyTextInput
                    icon="lock"
                    //   label="Confirm Password"
                    placeholder="Confirm Password"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("confirmPassword")}
                    onChangeText={(text) => setconfirmPassword(text)}
                    onBlur={handleBlur("confirmPassword")}
                    value={confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 10,
                    }}
                  >
                    <Checkbox
                      color={orange}
                      value={isChecked}
                      onValueChange={setIsChecked}
                    />
                    <Text style={{ marginLeft: 5, fontSize: 14 }}>
                      I agree to the{" "}
                    </Text>
                    <TextLink
                      onPress={() => navigation.navigate("TermsConditions")}
                    >
                      <TextLinkContent
                        style={{
                          fontSize: 14,
                          textDecorationLine: "underline",
                        }}
                      >
                        Terms & Conditions
                      </TextLinkContent>
                    </TextLink>
                  </View>

                  <StyledButton
                    onPress={RegisterUser}
                    style={{ marginTop: 20 }}
                  >
                    <ButtonText>Register</ButtonText>
                  </StyledButton>
                  <ExtraView>
                    <Extratext>Already have an account? </Extratext>
                    <TextLink onPress={() => navigation.navigate("Login")}>
                      <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
                  </ExtraView>
                  {/* Error message */}
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </StyledContainer>
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      {!isDate && (
        <StyledTextInput
          {...props}
          placeholderTextColor="black"
          selectionColor={orange} // Set the caret color to red
        />
      )}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput
            {...props}
            placeholderTextColor="black"
            selectionColor="black"
          />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={23}
            color={darkLight}
            style={{ marginTop: -17 }}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
