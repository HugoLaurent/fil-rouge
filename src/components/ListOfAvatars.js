import { View, FlatList, Pressable, Image } from "react-native";
import { ListHeaderComponent } from "./ListHeaderComponent";
import { UserListContext } from "../context";

export const ListOfAvatars = ({}) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.log("Hello")}>
        <Image
          style={{ height: 56, width: 56, borderRadius: 28, marginRight: 30 }}
          source={{ uri: item.url }}
        />
      </Pressable>
    );
  };

  return (
    <UserListContext.Consumer>
      {({ userList }) => (
        <View
          style={{
            zIndex: 100,
            paddingVertical: 10,
            paddingLeft: 20,
            marginLeft: 50,
          }}
        >
          <FlatList
            data={userList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            ListHeaderComponent={<ListHeaderComponent />}
            showsHorizontalScrollIndicator={false}
            snapToInterval={86}
            decelerationRate={"fast"}
          />
        </View>
      )}
    </UserListContext.Consumer>
  );
};
