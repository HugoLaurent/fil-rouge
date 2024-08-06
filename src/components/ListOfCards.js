import { Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const ListOfCards = () => {
  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: "100%",
          height: 288,
          borderRadius: 20,
          marginBottom: 32,
        }}
        source={{ uri: item.url }}
      />
    );
  };
  const arrayOfImages = [
    {
      itemId: 101,
      authorId: 11,
      timestamp: "2 hrs ago",
      url: "https://picsum.photos/200/300",
      likes: "20",
      conversation: "12",
    },
    {
      itemId: 102,
      authorId: 12,
      timestamp: "3 hrs ago",
      url: "https://picsum.photos/200/301",
      likes: "30",
      conversation: "13",
    },
    {
      itemId: 103,
      authorId: 13,
      timestamp: "4 hrs ago",
      url: "https://picsum.photos/200/302",
      likes: "40",
      conversation: "14",
    },
    {
      itemId: 104,
      authorId: 14,
      timestamp: "5 hrs ago",
      url: "https://picsum.photos/201/300",
      likes: "50",
      conversation: "15",
    },
    {
      itemId: 105,
      authorId: 15,
      timestamp: "6 hrs ago",
      url: "https://picsum.photos/202/300",
      likes: "60",
      conversation: "16",
    },
  ];

  return (
    <View style={{ paddingVertical: 30 }}>
      <FlatList
        data={arrayOfImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
