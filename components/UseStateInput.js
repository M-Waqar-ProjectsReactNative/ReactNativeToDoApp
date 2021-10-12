import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Waqar");
  const [age, setAge] = useState(30);
  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g john"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 99"
        onChangeText={(val) => setAge(val)}
      />
      <View>
        <Text> My Name is {name}</Text>
        <Text> I am {age} years old.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 1,
    padding: 5,
    width: "100%",
  },
});
