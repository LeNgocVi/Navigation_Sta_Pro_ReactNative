import { Text, View, SafeAreaView } from "react-native";

export default function ContactScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{ textAlign: "center", justifyContent: "center", margin: 50 }}
        >
          This is Contact page
        </Text>
      </View>
    </SafeAreaView>
  );
}
