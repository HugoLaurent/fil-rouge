import { Text, Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "../components/Card";
import { requestBase } from "../utils/constants";
import { useState, useEffect } from "react";

export const ListOfCards = () => {
  const [cardList, setCardList] = useState(null);

  async function fetchCardData(id) {
    try {
      const response = await fetch(`${requestBase}/home.json`);
      const data = await response.json();
      console.log("data json ok => " + JSON.stringify(data));

      setCardList(data);
    } catch (error) {
      console.log("listcard fetch error" + error.message);
    }
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  if (!cardList) {
    return (
      <View>
        <Text>Loading Data...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return <Card item={item} />;
  };

  return (
    <View style={{ marginTop: 2, paddingHorizontal: 20, marginBottom: 160 }}>
      <FlatList
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(item) => item.itemId}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
