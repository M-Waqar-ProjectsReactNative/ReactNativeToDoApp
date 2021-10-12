import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [persons, setPersons] = useState([
    { name: "John", id: "1" },
    { name: "Cena", id: "2" },
    { name: "Roman", id: "3" },
    { name: "Jay", id: "4" },
    { name: "Joy", id: "5" },
    { name: "Randy", id: "6" },
    { name: "Sam", id: "7" },
    { name: "Cris", id: "8" },
    { name: "Tom", id: "9" },
    { name: "Moody", id: "10" },
  ]);
  return (
    <View style={styles.container}>
      <Text>Flat List Simple</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={persons}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      <Text>Flat List Column</Text>
      <FlatList
        numColumns={2} // only if split is required
        keyExtractor={(item) => item.id}
        data={persons}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    padding: 20,
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});
