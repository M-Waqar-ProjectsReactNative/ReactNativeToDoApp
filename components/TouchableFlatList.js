import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

  const pressHandler = (id) => {
    console.log(id);
    setPersons((prevPersons) => {
      return prevPersons.filter((item) => item.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Text>Flat List Click able</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={persons}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => pressHandler(item.id)}
          >
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
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
    marginTop: 20,
    padding: 20,
    backgroundColor: "pink",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 5,
    width: "50%",
  },
});
