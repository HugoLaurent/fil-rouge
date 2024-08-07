import { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddPost } from "./AddPost";
import { Favorites } from "./Favorites";
import { Feed } from "./Feed";
import { Profile } from "./Profile";
import { View } from "react-native";
import { fetchLikedImages } from "../api/fecthLikedImages";
import { useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();

const ConversationBase = () => <View style={{ flex: 1 }} />;

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLikedImages());
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#25A0B0",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
        headerTransparent: true,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: "Poppins_700Bold",
          textAlign: "left",
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen
        name="ConversationsMain"
        component={ConversationBase}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="chatbox-outline" size={size} color="#000" />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("ConversationNav");
          },
        })}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({ size }) => (
            <View style={{ marginTop: -30 }}>
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#000",
                  padding: 30,
                  bottom: -10,
                  left: -13,
                  borderRadius: 23,
                  transform: [{ rotate: "45deg" }],
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
              />
              <Ionicons name="add-circle-outline" color="#fff" size={36} />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
