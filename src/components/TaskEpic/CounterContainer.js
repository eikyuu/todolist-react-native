import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../_Shared/Counter/Counter";

const CounterContainer = ({ nbTasks, nbTasksCompleted }) => {
  return (
    <View style={styles.container}>
      <Counter nb={nbTasks} title={"Taches creers"} />
      <Counter nb={nbTasksCompleted()} title={"Taches complete"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
});

export default CounterContainer;
