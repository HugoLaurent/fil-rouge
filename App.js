import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { requestBase } from "./src/utils/constants";
import { UserListContext } from "./src/context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { UserDetailsModal } from "./src/surfaces/UserDetailsModal";

import { Home } from "./src/surfaces/Home";
import { Login } from "./src/surfaces/Login";
import { ConversationsNavigation } from "./src/surfaces/ConversationsNavigation";

const Stack = createStackNavigator();

export default function App(id) {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  async function fetchUsersData() {
    const response = await fetch(`${requestBase}/users.json`);
    const data = await response.json();
    setUserList(data);
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  if (!userList) {
    return (
      <View>
        <Text>Loading Data...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <UserListContext.Provider value={{ userList: userList }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group>
                {!userLoggedIn ? (
                  <Stack.Screen name="Login" component={Login} />
                ) : (
                  <>
                    <Stack.Screen
                      name="Home"
                      options={{ headerShown: false }}
                      component={Home}
                    />

                    <Stack.Screen
                      name="ConversationNav"
                      component={ConversationsNavigation}
                      options={{ headerShown: false }}
                    />
                  </>
                )}
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                  name="UserDetailsModal"
                  component={UserDetailsModal}
                  options={{ headerShown: false }}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </UserListContext.Provider>
      </Provider>
    </SafeAreaProvider>
  );
}
