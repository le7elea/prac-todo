import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
// import QRAbout from "../QRAbout";
export default function HomeScreen({ navigation }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App ✅</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={task}
        onChangeText={setTask}
      />

      <Button title="Add Task" onPress={addTask} />
      <Button title="Go to About Page" onPress={() => navigation.navigate("AboutScreen")} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      {/* <QRAbout /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
  task: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#eee" },
});
