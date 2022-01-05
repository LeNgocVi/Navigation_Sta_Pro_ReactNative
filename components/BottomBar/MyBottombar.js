import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../Home";
import LinkScreen from "../Link";
import SiteEventScreen from "../SiteEvent";
import ContactScreen from "../Contact";
import MyRecord from "../MyRecord";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home" //route default
      labeled={true} // show label+icon
      activeColor="#ff6600" //color of active tab
      style={{ backgroundColor: "red" }}
      shifting={false} // show all label
      barStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyRecord"
        component={MyRecord}
        options={{
          tabBarLabel: "My Record",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Link"
        component={LinkScreen}
        options={{
          tabBarLabel: "Link",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="link" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SiteEvent"
        component={SiteEventScreen}
        options={{
          tabBarLabel: "Site Event",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clock-time-eleven"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
