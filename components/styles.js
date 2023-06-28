import styled from "styled-components";
import { View, Text, Image, TextInput } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  light: "#F6F6F6",
  brand: "#808080",
  red: "#EB3F3F",
  black: "#000000",
  dark: "#273B4A",
  gray: "#D9D9D9",
};

const {
  primary,
  secondary,
  tertiary,
  darkLight,
  light,
  brand,
  red,
  black,
  dark,
  gray,
} = Colors;

//register and login styles
export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  allign-items: center;
`;

export const PageLogo = styled.Image`
  width: 200px;
  height: 150px;
  align-self: center; /* Add this line to center the image horizontally */
  margin-vertical: 20px; /* Add margin to adjust the vertical position if needed */
`;
export const SignupPageLogo = styled.Image`
  width: 150px;
  height: 100px;
  align-self: center; /* Add this line to center the image horizontally */
  margin-vertical: 20px; /* Add margin to adjust the vertical position if needed */
`;
export const SignupPageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${red};
  padding: 8px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${red};
  padding: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${red};
`;

export const StyledFormArea = styled.View`
  width: 98%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${light};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  color: ${dark};
  border-width: 2px;
  border-color: black;
`;

export const StyledInputLabel = styled.Text`
  color: ${dark};
  font-size: 18px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 12px;
  top: 42px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 12px;
  top: 42px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${red};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 50px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  font-weight: bold;
`;


export const MsgBox = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${red};
  padding: 8px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Extratext = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${black};
  font-size: 16px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${red};
  font-size: 16px;
`;

//google
export const GoogleButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${gray};
  border-radius: 5px;
  margin-vertical: 5px;
  height: 50px;
  flex-direction: row;
`;

export const GoogleImage = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 43px;
`;

export const GoogleText = styled.Text`
  color: ${dark};
  font-size: 16px;
  font-weight: bold;
`;
export const Box = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${dark};
  padding: 8px;
`;

//register login styles end
