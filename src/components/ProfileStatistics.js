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
      <View style={styles.general}>
        <Text style={styles.headerText}>Posts</Text>
        <Text style={styles.stats}> 35</Text>
      </View>
      <View style={styles.general}>
        <Text style={styles.headerText}>Followers</Text>
        <Text style={styles.stats}> 1,552</Text>
      </View>
      <View style={styles.general}>
        <Text style={styles.headerText}>Follows</Text>
        <Text style={styles.stats}>128 </Text>
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
