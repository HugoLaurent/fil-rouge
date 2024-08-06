import { View, Text, StyleSheet } from "react-native";

export const ProfileStatistics = () => {
  return (
    <View
      style={{
        paddingTop: 70,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <View style={StyleSheet.general}>
        <Text style={StyleSheet.headerText}>Posts</Text>
        <Text style={StyleSheet.stats}> 35</Text>
      </View>
      <View style={StyleSheet.general}>
        <Text style={StyleSheet.headerText}>Followers</Text>
        <Text style={StyleSheet.stats}> 1,552</Text>
      </View>
      <View style={StyleSheet.general}>
        <Text style={StyleSheet.headerText}>Follows</Text>
        <Text style={StyleSheet.stats}>128 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  general: {
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  stats: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
  },
});
