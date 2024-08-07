import { View, Image, useWindowDimensions, FlatList, Text } from "react-native";

const arrayOfImages = [
  {
    id: 1,
    url: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    url: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    url: "https://picsum.photos/200/302",
  },
  {
    id: 4,
    url: "https://picsum.photos/201/300",
  },
  {
    id: 5,
    url: "https://picsum.photos/202/300",
  },
];

export const FavoritedImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;

  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: imageWidth,
          height: 130,
          borderRadius: 20,
          marginBottom: 32,
          borderColor: "#000",
        }}
        source={{ uri: item.url }}
      />
    );
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <Text>Coucou</Text>
      <FlatList
        data={arrayOfImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
