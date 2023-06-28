import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { ScrollView, View, TouchableOpacity, TextInput } from "react-native";
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

//date-time picker
import DateTimePicker from "@react-native-community/datetimepicker";

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

//firebase
import { authentication } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //error message
    const [error, setError] = useState(null);

    // authentication
    const RegisterUser = () => {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        // Display success message
        setError("Registered successfully!");
      })
      .catch((error) => {
        console.log(error);
        // Display error message
        setError("Registration failed. Please try again.");
      });
    };


  return (
    <KeyboardAvoidingWrapper>
      <ScrollView>
        <StyledContainer>
          <StatusBar style="dark" />
          <InnerContainer>
            <SignupPageLogo
              resizeMode="cover"
              source={require("../assets/img/e-logo.png")}
            />
            <Subtitle>Register Account</Subtitle>
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
                  {/* Error message */}
                  <View style={{ flex: 1, alignItems: "center", height: 36 }}>
                      {error && <MsgBox style="text-center text-sm">{error}</MsgBox>}
                  </View>
                  <MyTextInput
                    icon="person"
                    //   label="Username"
                    placeholder="First Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("firstname")}
                    onBlur={handleBlur("firstname")}
                    value={values.firstname}
                    style={{ marginTop: -15 }}
                  />
                  <MyTextInput
                    icon="person-fill"
                    //   label="Full Name"
                    placeholder="Last Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                    style={{ marginTop: -15 }}
                  />
                  <MyTextInput
                    icon="mail"
                    //   label="Email Address"
                    placeholder="Email Address"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("email")}
                    onChangeText={text=>setEmail(text)}
                    onBlur={handleBlur("email")}
                    value={email}
                    keyboardType="email-address"
                    style={{ marginTop: -15 }}
                  />
                  <MyTextInput
                    icon="device-mobile"
                    placeholder="Phone Number"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                    style={{ marginTop: -15 }}
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
                    style={{ marginTop: -15 }}
                  />
                  <MyTextInput
                    icon="lock"
                    //   label="Password"
                    placeholder="Enter Password"
                    placeholderTextColor={darkLight}
                    // onChangeText={handleChange("password")}
                    onChangeText={text=>setPassword(text)}
                    onBlur={handleBlur("password")}
                    value={password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    style={{ marginTop: -15 }}
                  />
                  <MyTextInput
                    icon="lock"
                    //   label="Confirm Password"
                    placeholder="Confirm Password"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    style={{ marginTop: -15 }}
                  />
                  <StyledButton onPress={RegisterUser} style={{ marginTop: 20 }}>
                    <ButtonText >Signup</ButtonText>
                  </StyledButton>
                  <ExtraView>
                    <Extratext>Already have an account? </Extratext>
                    <TextLink onPress={() => navigation.navigate("Login")}>
                      <TextLinkContent>Login here</TextLinkContent>
                    </TextLink>
                  </ExtraView>
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
      <LeftIcon>
        <Octicons name={icon} size={30} color="black" style={{ marginTop: -17 }}/>
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && (
        <StyledTextInput
          {...props}
          placeholderTextColor="black"
          selectionColor="black"
      
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
            size={30}
            color={darkLight}
            style={{ marginTop: -17 }}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
