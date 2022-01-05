import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as React from "react";
import MyTabs from "./BottomBar/MyBottombar";

export default function MyProfile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.tableFrofile}>
        <View style={styles.itemFrofile}>
          <Text style={styles.titileFrofile}>Name</Text>

          <Text style={styles.contentFrofile}>UserName</Text>
        </View>

        <View style={styles.itemFrofile}>
          <Text style={styles.titileFrofile}>Email</Text>

          <Text style={styles.contentFrofile}>{route?.params?.email}</Text>
        </View>
        <View style={styles.itemFrofile}>
          <Text style={styles.titileFrofile}>Password</Text>

          <Text style={styles.contentFrofile}>{route?.params?.password}</Text>
        </View>
      </View>

      <MyTabs></MyTabs>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  itemFrofile: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: 340,
    borderWidth: 1,
    marginTop: 20,
    borderColor: "grey",
    borderRadius: 10,
  },

  titileFrofile: {
    width: 100,
    fontWeight: "bold",
    color: "grey",
    paddingLeft: 10,
  },
  contentFrofile: {
    fontWeight: "bold",
  },
});
