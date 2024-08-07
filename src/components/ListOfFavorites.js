import { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Card } from "./Card";
import AppLoading from "expo-app-loading";
import { requestBase } from "../utils/constants";
import { useSelector } from "react-redux";

export const ListOfFavorites = ({ navigation }) => {
  const { likedImages } = useSelector((state) => state.likedImages);
  const [imageList, setImageList] = useState([]);

  if (!likedImages) {
    return <AppLoading />;
  }

  useEffect(() => {
    const reversedImages = [...likedImages].reverse();
    setImageList(reversedImages);
  }, [likedImages]);

  const renderItem = ({ item }) => {
    return <Card item={item} navigation={navigation} />;
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
        snapToInterval={312}
        decelerationRate="fast"
      />
    </View>
  );
};
