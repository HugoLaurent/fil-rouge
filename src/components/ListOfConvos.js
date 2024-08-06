import { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";

export const ListOfConvos = ({ navigation }) => {
  const userList = [
    {
      id: 1,
      name: "John Doe",
      url: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      url: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "John Smith",
      url: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Jane Smith",
      url: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "John Johnson",
      url: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Jane Johnson",
      url: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "John Brown",
      url: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Jane Brown",
      url: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "John White",
      url: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Jane White",
      url: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ];

  const conversationList = [
    {
      id: 1,
      userId: 1,
      text: "Hey, how are you?",
    },
    {
      id: 2,
      userId: 2,
      text: "I'm good, how are you?",
    },
    {
      id: 3,
      userId: 3,
      text: "I'm good too!",
    },
    {
      id: 4,
      userId: 4,
      text: "That's great!",
    },
    {
      id: 5,
      userId: 5,
      text: "Yeah!",
    },
    {
      id: 6,
      userId: 6,
      text: "Well, I gotta go now.",
    },
    {
      id: 7,
      userId: 7,
      text: "Okay, see you later!",
    },
    {
      id: 8,
      userId: 8,
      text: "Bye!",
    },
  ];

  const renderItem = ({ item }) => {
    const currentUser = userList.find((user) => user.id === item.userId);

    return (
      <Pressable
        onPress={() =>
          navigation.navigate("Messages", {
            name: currentUser.name,
            avatar: currentUser.url,
          })
        }
        style={{
          height: 103,
          backgroundColor: "rgba(255,255,255, 0.6)",
          borderRadius: 33,
          marginBottom: 16,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <View
            style={{
              height: 67,
              width: 67,
              borderRadius: 35,
              borderColor: "#000",
              borderWidth: 1,
              marginHorizontal: 17,
            }}
          >
            <Image
              style={{
                height: 61,
                width: 61,
                borderRadius: 35,
                marginTop: 2,
                marginLeft: 2,
              }}
              source={{ uri: currentUser.url }}
            />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 14, paddingBottom: 9 }}>
            {currentUser.name}
          </Text>
          <Text
            style={{
              color: "#656565",
              width: "100%",
            }}
          >
            {item.text}
          </Text>
        </View>
      </Pressable>
    );
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
