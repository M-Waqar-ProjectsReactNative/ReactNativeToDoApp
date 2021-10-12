import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [todo, settodo] = useState("");
  const changeHandler = (val) => {
    settodo(val);
  };
  const pressHandler = () => {
    if (todo.length > 3) {
      submitHandler(todo);
      settodo("");
    } else {
      Alert.alert("Info", "Todo should be atleast 3 chars", [
        { text: "Ok", onPress: () => console.log("alert closed.") },
      ]);
    }
  };
  return (
    <View>
      <TextInput
        value={todo}
        placeholder="new todo..."
        style={styles.text}
        onChangeText={changeHandler}
      />
      <Button title="Add Todo" color="coral" onPress={pressHandler} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  text: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});
