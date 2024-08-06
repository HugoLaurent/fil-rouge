import { Conversations } from "./Conversations";
import { Messages } from "./Messages";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const ConversationsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "#000",
        headerTransparent: true,
        headerTitleAlign: "left",
        headerTitleStyle: {
          height: 160,
        },
        headerTitleStyle: {
          textAlign: "left",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "Poppins_700Bold",
        },
      }}
    >
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Poppins_400Regular",
            textAlign: "center",
            position: "absolute",
            top: 100,
            left: 120,
          },
        })}
      />
    </Stack.Navigator>
  );
};
