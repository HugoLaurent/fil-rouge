import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Home } from "./src/surfaces/Home";
import { Login } from "./src/surfaces/Login";
import { ConversationsNavigation } from "./src/surfaces/ConversationsNavigation";

const Stack = createStackNavigator();

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
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

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!userLoggedIn ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConversationNav"
                component={ConversationsNavigation}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
