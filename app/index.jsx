import { useEffect } from "react";
import { Platform, View, Text } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const { redirect, id } = useLocalSearchParams();

  useEffect(() => {
    // If running on web AND QR has ?redirect=xxx param → redirect
    if (Platform.OS === "web" && redirect) {
      if (id) {
        router.replace(`/${redirect}/${id}`);
      } else {
        router.replace(`/${redirect}`);
      }
    }
  }, [redirect, id]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>📱 Mobile Home Page</Text>
      <Text>On mobile → this is always first</Text>
      <Text>On web → use ?redirect=about or ?redirect=contact</Text>
    </View>
  );
}
