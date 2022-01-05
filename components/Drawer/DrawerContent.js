import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Entypo } from "@expo/vector-icons";
import logo from "../../assets/logo.png";

export default function DrawerContent(props) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View style={styles.logoview}>
            <Image style={styles.image} source={logo} />
          </View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.viewSignOut}>
        <DrawerItem
          label="Sign Out"
          style={{ backgroundColor: "#FF0000" }}
          onPress={() => navigation.navigate("LoginAcount")}
          labelStyle={{ color: "#ffffff" }}
          icon={() => <Entypo name="log-out" size={24} color="white" />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoview: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
  },
  viewSignOut: {
    bottom: 0,
  },
});
