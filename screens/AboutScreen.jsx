import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App 📖</Text>
      <Text style={styles.text}>
        This is a simple Todo app built with Expo. It runs on iOS, Android, and Web!
      </Text>
      <Button title="Back to Home" onPress={() => navigation.navigate("Home")} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  text: { fontSize: 16, textAlign: "center", marginBottom: 20 },
});
