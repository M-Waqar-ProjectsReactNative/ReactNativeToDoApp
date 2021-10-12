import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.headingsec}>
        <Text>My Counter App</Text>
        <Text>Count Value: {count}</Text>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={() => setCount(count + 1)} title="Inc"></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => setCount(count - 1)} title="Dec"></Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingsec: {
    alignItems: "center",
  },
  btncontainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    margin: 5,
  },
});
