import { useState } from "react";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ListOfConvos } from "../components/ListOfConvos";
import { TextInput } from "react-native-gesture-handler";

export const Conversations = () => {
  const headerHeight = useHeaderHeight();
  const [text, onChangeText] = useState();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight - 30 }}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 280,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 350,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View style={{ marginHorizontal: 30, position: "relative" }}>
        <View>
          <TextInput
            style={{
              fontSize: 14,
              paddingVertical: 12,
              paddingLeft: 40,
              marginHorizontal: 17,
              borderRadius: 15,
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.1,
              shadowRadius: 9,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search Contacts"
          />
          <Ionicons
            name="search"
            size={24}
            color="#000"
            style={{ position: "absolute", top: 6, left: 28 }}
          />
        </View>
        <ListOfConvos navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
