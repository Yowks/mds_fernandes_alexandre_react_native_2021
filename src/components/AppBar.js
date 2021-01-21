import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppBar({ todos }) {
  let counter = 0;

  todos.map((todo) => {
    if (todo.isChecked) {
      counter += 1;
      console.log(todo.isChecked + "okkkk");
    }
  });

  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>{todos.length} Tâches créées </Text>
      <Text style={styles.heading}>Tâches complétées {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "white",
    color: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-around",
  },
  heading: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
    width: "50%",
    textAlign: "center",
  },
});
