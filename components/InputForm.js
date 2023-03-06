import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../features/todo/todoSlice";
import ReUseableBtn from "./ReUseableBtn";

export default function InputForm() {
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch();

  // Handling submission via reducer
  const handleSubmit = () => {
    if (todo.trim() !== "") {
      dispatch(
        addItem({
          title: todo,
          id: nanoid(),
          done: false,
        })
      );
      setTodo("");
    } else {
      alert("Enter Todo first...");
    }
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setTodo}
          value={todo}
          placeholder='Add Todo Item ...'
        />
        <View style={styles.button}>
          <ReUseableBtn title='Add Todo' color='#005A9C' onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: "black",
    backgroundColor: "red",
  },
});
