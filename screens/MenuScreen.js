import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Iconify } from "react-native-iconify";
import React, { useContext } from "react";
import { AuthContext } from "../src/api/context";

const MenuScreen = () => {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);

  const handleOrderScreen = () => {
    // Navigate to my order screen
    navigation.navigate("OrderScreen");
  };
  const handleInstallmentScreen = () => {
    // Navigate to installment screen
    navigation.navigate("InstallmentScreen");
  };
  const handleFavoritesScreen = () => {
    // Navigate to favorites screen
    navigation.navigate("FavoritesScreen");
  };
  const handleStoreLocatorScreen = () => {
    // Navigate to store locator screen
    navigation.navigate("StoreLocatorScreen");
  };
  const handleSettingsScreen = () => {
    // Navigate to settings screen
    navigation.navigate("SettingsScreen");
  };
  const handleLogout = () => {
    // Call the signOut function to clear the token
    signOut();
    // Navigate to the "Login" screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <View style={{ marginTop: 13 }}>
          <Text
            style={{
              color: "black",
              fontSize: 22,
              fontWeight: 600,
              marginLeft: 20,
              marginTop: 5,
            }}
          >
            E-
            <Text style={{ color: "#EC6F56" }}> PharmaScripts</Text>
          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.profileCont}>
          <View style={styles.pic_cont}>
            <Image
              source={require("../assets/img/cymer.jpg")}
              className="w-full h-full rounded-full"
            />
          </View>
          <Text style={styles.name}>Xymer I. Serna</Text>
        </View>

        <Text style={styles.menuText}>Menu</Text>
        <View style={styles.line} />

        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={handleOrderScreen}>
            <View style={styles.viewCont}>
              <View style={styles.iconsBG}>
                <Iconify
                  icon="solar:notebook-outline"
                  size={22}
                  color="#EC6F56"
                />
              </View>
              <Text style={styles.viewContText}>My Orders</Text>
              <View style={styles.arrowIcon}>
                <Iconify
                  style={{ marginLeft: 155 }}
                  icon="iconoir:nav-arrow-right"
                  size={22}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleInstallmentScreen}>
            <View style={styles.viewCont}>
              <View style={styles.iconsBG}>
                <Iconify icon="quill:creditcard" size={22} color="#EC6F56" />
              </View>
              <Text style={styles.viewContText}>Installment</Text>
              <View style={styles.arrowIcon}>
                <Iconify
                  icon="iconoir:nav-arrow-right"
                  size={22}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleFavoritesScreen}>
            <View style={styles.viewCont}>
              <View style={styles.iconsBG}>
                <Iconify icon="ph:heart-light" size={22} color="#EC6F56" />
              </View>
              <Text style={styles.viewContText}>Favorites</Text>
              <View style={styles.arrowIcon}>
                <Iconify
                  icon="iconoir:nav-arrow-right"
                  size={22}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleStoreLocatorScreen}>
            <View style={styles.viewCont}>
              <View style={styles.iconsBG}>
                <Iconify
                  icon="ion:location-outline"
                  size={22}
                  color="#EC6F56"
                />
              </View>
              <Text style={styles.viewContText}>Store Locator</Text>
              <View style={styles.arrowIcon}>
                <Iconify
                  icon="iconoir:nav-arrow-right"
                  size={22}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSettingsScreen}>
            <View style={styles.viewCont}>
              <View style={styles.iconsBG}>
                <Iconify
                  icon="solar:settings-outline"
                  size={22}
                  color="#EC6F56"
                />
              </View>
              <Text style={styles.viewContText}>Settings</Text>
              <View style={styles.arrowIcon}>
                <Iconify
                  icon="iconoir:nav-arrow-right"
                  size={22}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.logoutCont}>
            <Text style={styles.logoutButton}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 20,
    borderRadius: 20,
    flex: 1,
  },
  insideContainer: {
    width: "85%",
  },
  line: {
    height: 0.5,
    width: "105%",
    backgroundColor: "#8E8E8E",
    marginTop: 20,
    marginLeft: 20,
  },
  pic_cont: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginRight: 20,
  },
  profileCont: {
    flexDirection: "row", // Align children horizontally
    alignItems: "center", // Center children vertically
    justifyContent: "center",
  },
  name: {
    color: "#3A3A3A",
    fontWeight: 600,
    fontSize: 15,
  },
  menuText: {
    color: "black",
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 20,
    marginTop: 25,
  },
  viewCont: {
    flexDirection: "row", // Arrange icons and text horizontally
    alignItems: "center", // Align items vertically within the container
    justifyContent: "flex-start", // Spread elements apart
    paddingHorizontal: 10, // Add some horizontal spacing
    marginBottom: 5,
  },
  viewContText: {
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 13,
    marginVertical: 15,
  },
  iconsBG: {
    backgroundColor: "#F5F5F5",
    marginLeft: 25,
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  logoutButton: {
    fontWeight: 600,
    fontSize: 17,
    color: "white",
    alignItems: "center", // Center children vertically
  },
  logoutCont: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", // Align children horizontally
    marginLeft: 50,
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
  },
  arrowIcon: {
    flex: 1, // Distribute remaining space
    alignItems: "flex-end", // Align icon to the end of the flex container
    marginLeft: "auto",
    marginRight: -30,
  },
});
