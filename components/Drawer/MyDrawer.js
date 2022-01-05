import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import MyProfile from "../MyProfile";
import SiteEventScreen from "../SiteEvent";
import HomeScreen from "../Home";
import EmployeeBenefits from "../EmployeeBenefits";
import MyRequistion from "../MyRequistion";
import LinkScreen from "../Link";
import ContactScreen from "../Contact";
import LoginAcountScreen from "../LoginAcount";
import DrawerContent from "./DrawerContent";
import MyTabs from "../BottomBar/MyBottombar";
import MyRecord from "../MyRecord";
import detailRecord from "../detaiRecord";

export default function MyDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="LoginAcount"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: "red",
        // headerStyle: { backgroundColor: 'papayawhip'},
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: "Home",
          drawerIcon: () => <Feather name="home" size={24} color="black" />,
        }}
        // initialParams={}
      />
      {/* <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      /> */}

      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: "My Profile",
          drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="EmployeeBenefits"
        component={EmployeeBenefits}
        options={{
          title: "Employee Benefits",
          drawerIcon: () => <AntDesign name="hearto" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="MyRequistion"
        component={MyRequistion}
        options={{
          title: "My Requistion",
          drawerIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Link"
        component={LinkScreen}
        options={{
          title: "Link",
          drawerIcon: () => <AntDesign name="link" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          // gestureEnabled: false,
          title: "Contact Us",
          drawerIcon: () => <Feather name="phone" size={24} color="black" />,
        }}
      />
      {/* 
      <Drawer.Screen
        name="SiteEvent"
        component={SiteEventScreen}
        options={{ drawerHideStatusBarOnOpen: "" }}
      /> */}

      <Drawer.Screen
        name="SiteEvent"
        component={SiteEventScreen}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => null,
          title: "Sites Event",
          // drawerIcon: () => <MaterialIcons name="event-available" size={24} color="black" />,
        }}
      />

      <Drawer.Screen
        name="LoginAcount"
        component={LoginAcountScreen}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          headerShown: false,
          // title: "Login Page",
          // drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />

      {/* <Drawer.Screen
        name="MyRecord"
        component={MyRecord}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          headerShown: false,
          // title: "Login Page",
          // drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="DetailRecord"
        component={detailRecord}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
          headerShown: false,
          // title: "Login Page",
          // drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      /> */}
    </Drawer.Navigator>
  );
}
