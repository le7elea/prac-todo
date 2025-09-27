import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRCodeGenerator() {
  const [path, setPath] = useState("/about"); // default value
  const baseUrl = "https://my-todo-app.vercel.app"; // replace with your deployed URL

  const fullUrl = `${baseUrl}${path}`;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Generate QR Code</Text>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
        placeholder="Enter path, e.g. /about"
        value={path}
        onChangeText={setPath}
      />

      <Button title="Generate QR" onPress={() => {}} />

      <View style={{ marginTop: 20 }}>
        <QRCode value={fullUrl} size={200} />
      </View>

      <Text style={{ marginTop: 10, fontSize: 14, color: "gray" }}>{fullUrl}</Text>
    </View>
  );
}
