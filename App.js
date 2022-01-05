import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/BottomBar/MyBottombar";
import MyDrawer from "./components/Drawer/MyDrawer";
export default function App() {
  return (
    <NavigationContainer initialRouteName="SiteEvent">
      <MyDrawer />
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
}
