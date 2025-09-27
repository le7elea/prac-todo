import * as React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import AboutScreen from "@/screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  );
}
