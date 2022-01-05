// import React from "react";
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   StatusBar,
//   Platform,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// const ItemDetail = ({ title, content }) => {
//   return (
//     <View style={styles.itemDetail}>
//       <View style={styles.titleItem}>
//         <Text style={styles.titleItemText}>{title}</Text>
//       </View>
//       <View style={styles.contentItem}>
//         <Text style={styles.contentItemText}>{content}</Text>
//       </View>
//     </View>
//   );
// };

// const BottomDetail = ({ title1, content1, title2, content2 }) => {
//   return (
//     <View style={styles.ItemBottomDetail}>
//       <View style={styles.LeftItemBottomDetail}>
//         <Text style={styles.ItemBottomDetailTitle}>{title1}</Text>
//         <View style={styles.ItemBottomDetailViewContent}>
//           <Text style={styles.ItemBottomDetailContent}>{content1}</Text>
//         </View>
//       </View>
//       <View style={styles.RightItemBottomDetail}>
//         <Text style={styles.ItemBottomDetailTitle}>{title2}</Text>
//         <View style={styles.ItemBottomDetailViewContent}>
//           <Text style={styles.ItemBottomDetailContent}>{content2}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const detailRecord = ({ route }) => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.myRecordSafe}>
//       <View style={styles.viewHeader}>
//         <TouchableOpacity
//           style={styles.iconSetting}
//           onPress={() => navigation.navigate("MyRecord")}
//         >
//           <Ionicons name="chevron-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.textHeader}>SOR Quantity Records</Text>
//       </View>
//       <View style={styles.topDetail}>
//         <ItemDetail
//           title={"SOR Quantity Record NO"}
//           content={route?.params?.item.number}
//         />
//         <ItemDetail
//           title={"SOR Quantity Record Status"}
//           content={route?.params?.item.detail.recordStatus}
//         />
//         <ItemDetail title={"Job"} content={route?.params?.item.detail.job} />
//         <ItemDetail
//           title={"Foreman"}
//           content={route?.params?.item.detail.foreman}
//         />
//         <ItemDetail
//           title={"Engineer"}
//           content={route?.params?.item.detail.engneer}
//         />
//         <ItemDetail
//           title={"Location"}
//           content={route?.params?.item.detail.location}
//         />
//         <ItemDetail
//           title={"Total Effort"}
//           content={route?.params?.item.detail.totalEffort}
//         />
//       </View>
//       <Text style={styles.payItemTitle}>Pay Item Details</Text>
//       {/* <View style={{flex:1}}> */}
//       <View style={styles.bottomDetail}>
//         <Text style={styles.numberBottom}>
//           {route?.params?.item.itemDetail.number}
//         </Text>
//         <BottomDetail
//           title1={"UoM"}
//           content1={route?.params?.item.itemDetail.uom}
//           title2={"Rate"}
//           content2={route?.params?.item.itemDetail.rate}
//         />
//         <BottomDetail
//           title1={"Quantity *"}
//           content1={route?.params?.item.itemDetail.quantity}
//           title2={"Proposed Value"}
//           content2={route?.params?.item.itemDetail.proposed}
//         />
//         <View style={styles.commentView}>
//           <Text style={styles.commentTitle}>Comment *</Text>
//           <View style={styles.commentTitleView}>
//             <Text style={styles.commentContent}>uuuu</Text>
//           </View>
//         </View>

//         {/* number:123,
//         uom:'Kilogram',
//         rate:'$112 00',
//         quantity:'25',
//         proposed:'$2,800,00',
//         comment:'Test comment' */}
//       </View>
//       {/* </View> */}
//     </SafeAreaView>
//   );
// };

// export default detailRecord;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   viewHeader: {
//     flexDirection: "row",
//     justifyContent: "center",
//     borderBottomWidth: 1,
//     borderBottomColor: "grey",
//     height: 40,
//     backgroundColor: "white",
//   },
//   iconSetting: {
//     position: "absolute",
//     left: 10,
//   },
//   textHeader: {
//     fontWeight: "bold",
//     fontSize: 18,
//   },

//   myRecordSafe: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
//   },
//   topDetail: {
//     padding: 20,
//   },
//   bottomDetail: {
//     padding: 20,
//   },
//   itemDetail: {
//     flexDirection: "row",
//     borderWidth: 1,
//     borderColor: "grey",
//     borderRadius: 5,
//     marginTop: 10,
//     height: 40,
//   },
//   titleItem: {
//     width: "30%",
//     alignSelf: "center",
//     paddingLeft: 10,
//   },
//   titleItemText: {
//     fontWeight: "bold",
//     color: "grey",
//   },
//   contentItem: {
//     // justifyContent:'center',
//     alignSelf: "center",
//     paddingLeft: 10,
//   },
//   contentItemText: {
//     fontWeight: "bold",
//   },
//   payItemTitle: {
//     fontWeight: "bold",
//     fontSize: 18,
//     paddingLeft: 20,
//   },
//   numberBottom: {
//     fontSize: 17,
//     fontWeight: "700",
//     paddingLeft: 10,
//   },
//   bottomDetail: {
//     borderWidth: 1,
//     borderColor: "grey",
//     borderRadius: 7,
//     flex: 1,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 10,
//   },
//   ItemBottomDetail: {
//     flexDirection: "row",
//     padding: 10,
//     justifyContent: "space-between",
//   },
//   LeftItemBottomDetail: {
//     width: "47%",
//     // borderWidth:1
//   },
//   RightItemBottomDetail: {
//     width: "47%",
//     // borderWidth:1
//   },
//   ItemBottomDetailTitle: {
//     fontWeight: "bold",
//   },
//   ItemBottomDetailViewContent: {
//     borderWidth: 1,
//     borderColor: "grey",
//     borderRadius: 7,
//     height: 40,
//     justifyContent: "center",
//     paddingLeft: 10,
//     marginTop: 10,
//   },
//   commentTitle: {
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   commentView: {
//     paddingLeft: 10,
//   },
//   commentTitleView: {
//     borderWidth: 1,
//     borderColor: "grey",
//     borderRadius: 7,
//     height: 40,
//     width: "97%",
//     justifyContent: "center",
//     paddingLeft: 10,
//   },
// });
