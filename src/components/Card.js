import { View, Text, Image } from "react-native";
import { UserListContext } from "../context";

export const Card = ({ item }) => {
  return (
    <UserListContext.Consumer>
      {({ userList }) => {
        const currentUser = userList.filter(
          (user) => user.id === item.authorId
        );
        return (
          <View>
            <Image
              style={{
                height: 288,
                width: "100%",
                borderRadius: 20,
                marginBottom: 32,
              }}
              source={{ uri: item.url }}
            />
            <View
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                flexDirection: "row",
              }}
            >
              <Image
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: 20,
                  marginRight: 8,
                }}
                source={{ uri: currentUser[0].url }}
              />
              <View>
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  {currentUser[0].name}
                </Text>
                <Text style={{ color: "#D8D8D8", fontSize: 12 }}>
                  2 hrs ago
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    </UserListContext.Consumer>
  );
};
