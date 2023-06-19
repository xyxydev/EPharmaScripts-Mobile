import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik"; // Import Formik
import { Octicons, Ionicons } from "@expo/vector-icons"; //Icons

//import styles components
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
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
  GoogleButton,
  GoogleText,
  GoogleImage,
  Box,
} from "../components/styles";

import { View } from "react-native";

//colors
const { darkLight } = Colors;

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

//API client
// import axios from 'axios';

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("../assets/img/e-logo.png")}
          />
          <Subtitle>Welcome to E-Pharmascripts</Subtitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("HomeScreen");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  // label="Email Address"
                  icon="mail"
                  placeholder="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlurText={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  // label="Password"
                  icon="lock"
                  placeholder="Enter Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlurText={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>Forgot your password?</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Box> or </Box>
                <GoogleButton onPress={handleSubmit}>
                  <GoogleImage
                    resizeMode="cover"
                    source={require("../assets/img/g-logo.png")}
                  />
                  <GoogleText>Continue with Google</GoogleText>
                </GoogleButton>
                <ExtraView>
                  <Extratext>Don't have an account? </Extratext>
                  <TextLink onPress={() => navigation.navigate("Signup")}>
                    <TextLinkContent>Register now</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color="black" />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput
        {...props}
        placeholderTextColor="black"
        selectionColor="red" // Set the caret color to red
      />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};


export default Login;
