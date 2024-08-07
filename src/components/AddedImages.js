import { View, FlatList, Image, useWindowDimensions } from "react-native";

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

export const AddedImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;

  const renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: imageWidth,
          height: 220,
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
      <FlatList
        data={arrayOfImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={240}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
