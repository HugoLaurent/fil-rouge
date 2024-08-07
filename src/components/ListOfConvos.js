import { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { requestBase } from "../utils/constants";
import { ConversationItem } from "./ConversationItem";

export const ListOfConvos = ({ navigation }) => {
  const [conversationList, setConversationList] = useState(null);

  async function fetchConversationData() {
    try {
      const response = await fetch(`${requestBase}/conversations.json`);
      const data = await response.json();
      setConversationList(data);
    } catch (error) {
      console.log("listconvos fetch error" + error.message);
    }
  }

  useEffect(() => {
    fetchConversationData();
  }, []);

  if (!conversationList) {
    return (
      <View>
        <Text>Loading Data...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return <ConversationItem item={item} navigation={navigation} />;
  };

  return (
    <View
      style={{
        paddingTop: 30,
        marginTop: -30,
        marginBottom: 50,
      }}
    >
      <FlatList
        data={conversationList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
};
