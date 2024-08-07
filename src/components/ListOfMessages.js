import { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { requestBase } from "../utils/constants";

export const ListOfMessages = ({ conversationId }) => {
  const [messages, setMessages] = useState({ messages: [] });

  async function fetchMessages() {
    const response = await fetch(
      `${requestBase}/messages/${conversationId}.json`
    );
    const data = await response.json();
    setMessages(data);
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  if (!messages) {
    return <Text>Loading...</Text>;
  }

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.text,
        item.type === "from" ? styles.textTo : styles.textFrom,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={messages.messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#FAFAFA",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    fontSize: 14,
    padding: 10,
    maxWidth: "65%",
    marginVertical: 14,
  },

  textFrom: {
    borderTopLeftRadius: 20,
    alignSelf: "flex-end",
  },
  textTo: {
    borderTopRightRadius: 20,
    alignSelf: "flex-start",
  },
});
