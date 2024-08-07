import { useState, useEffect } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { requestBase } from "../utils/constants";
import { useWindowDimensions } from "react-native";

export const UserDetailsModalImages = ({ images }) => {
  const randomImageSet = Math.round(Math.random() * 4);
  const [imageList, setImageList] = useState(null);
  const { height, width } = useWindowDimensions();

  async function fetchImagesData() {
    const response = await fetch(
      `${requestBase}/userImages/${randomImageSet}.json`
    );
    const data = await response.json();
    setImageList(data);
  }

  useEffect(() => {
    fetchImagesData();
  }, []);

  if (!imageList) {
    return (
      <View>
        <Text>Loading Images...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item.url }}
        style={{
          width: width * 0.75,
          height: height * 0.6,
          borderRadius: 28,
          marginRight: 30,
        }}
      />
    );
  };
  return (
    <View style={{ paddingTop: 30 }}>
      <FlatList
        data={imageList.listOfitems}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.825}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ width: width * 0.1 }} />}
      />
    </View>
  );
};
