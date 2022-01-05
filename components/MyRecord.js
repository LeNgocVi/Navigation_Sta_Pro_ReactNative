import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

const DATA = [
  {
    id: 1,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "First Item ",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 2,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 3,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 4,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 5,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
];
const Item = ({ image, title, content, time }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    <Text style={styles.time}>{time}</Text>
  </View>
);
const MyRecord = () => {
  const renderItem = ({ item }) => (
    <Item
      image={item.image}
      title={item.title}
      content={item.content}
      time={item.time}
    />
  );
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    backgroundColor: "#fff",
    height: 250,
    borderRadius: 20,
  },
});
export default MyRecord;

// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import * as React from "react";
// import DATA from "./data/data";

// const Item = ({ id, number, type, status, day, rednumber }) => (
//   <View style={styles.item}>
//     <Text style={styles.number}>{number}</Text>
//     <Text style={styles.type}>{type}</Text>
//     <Text style={styles.status}>{status}</Text>
//     <Text style={styles.type}>{day}</Text>
//     <Text style={styles.status}>{rednumber}</Text>
//   </View>
// );
// export default function MyRecord() {
//   const [getData, setData] = useState(DATA);
//   const [getNumber, setNumber] = useState("");
//   const [getName, setName] = useState("");
//   const [getType, setType] = useState("");
//   const [getStatus, setStatus] = useState("");
//   const [getDay, setDay] = useState("");
//   const [getRedNumber, setRedNumber] = useState("");

//   const Number = ({ number }) => {
//     return (
//       <View>
//         <Text style={styles.number}>{number} </Text>
//       </View>
//     );
//   };

//   const Name = ({ name }) => {
//     return (
//       <View>
//         <Text style={styles.name}>{name}</Text>
//       </View>
//     );
//   };

//   const Type = ({ type }) => {
//     return (
//       <View>
//         <Text style={styles.type}>{type}</Text>
//       </View>
//     );
//   };

//   const Status = ({ status }) => {
//     return (
//       <View>
//         <Text style={styles.status}>{status}</Text>
//       </View>
//     );
//   };

//   const Day = ({ day }) => {
//     return (
//       <View>
//         <Text style={styles.day}>{day}</Text>
//       </View>
//     );
//   };

//   const RedNumber = ({ rednumber }) => {
//     return (
//       <View>
//         <Text style={styles.rednumber}>{rednumber}</Text>
//       </View>
//     );
//   };
//   function renderItem({ item }) {
//     return (
//       <View style={styles.viewFlatList}>
//         <TouchableOpacity style={styles.item}>
//           <View style={styles.leftItem}>
//             <Number number={item.number}></Number>
//             <Name name={item.name}></Name>
//             <Type type={item.type}></Type>
//           </View>
//           <View style={styles.rightItem}>
//             <Status status={item.status}></Status>
//             <Day day={item.day}></Day>
//             <RedNumber rednumber={item.rednumber}></RedNumber>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.myRecordSafe}>
//       <View style={styles.container}>
//         <View style={styles.viewHeader}>
//           <Text style={styles.textHeader}>My Records</Text>
//           <TouchableOpacity style={styles.iconSetting}>
//             <AntDesign name="pluscircleo" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           data={getData}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//       <BottomBar></BottomBar>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
