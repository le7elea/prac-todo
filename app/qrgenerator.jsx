import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QRGenerator() {
  const [page, setPage] = useState("");   // about, contact, product
  const [id, setId] = useState("");       // optional (for product)
  const [qrValue, setQrValue] = useState("");

  const generateQR = () => {
    let url = "https://visitrak-web.vercel.app//"; // change to your deployed web URL

    if (page) {
      url += `?redirect=${page}`;
      if (id) {
        url += `&id=${id}`;
      }
    }

    setQrValue(url);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>🔗 QR Code Generator</Text>

      <TextInput
        placeholder="Enter page (about, contact, product)"
        value={page}
        onChangeText={setPage}
        style={{
          borderWidth: 1,
          borderColor: "#888",
          padding: 10,
          width: "100%",
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <TextInput
        placeholder="Enter ID (optional, for product)"
        value={id}
        onChangeText={setId}
        style={{
          borderWidth: 1,
          borderColor: "#888",
          padding: 10,
          width: "100%",
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <Pressable
        onPress={generateQR}
        style={{
          backgroundColor: "#4CAF50",
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Generate QR</Text>
      </Pressable>

      {qrValue ? (
        <QRCode value={qrValue} size={200} />
      ) : (
        <Text>Enter values and press generate</Text>
      )}
    </View>
  );
}
