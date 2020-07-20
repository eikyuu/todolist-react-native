import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const FlottingButton = ({ toggleForm, isFormOpened }) => {
  return (
    <TouchableOpacity onPress={toggleForm} style={styles.container}>
      {isFormOpened ? (
        <Text style={styles.cross}>X</Text>
      ) : (
        <Text style={styles.cross}>+</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "green",
    alignSelf: "center",
  },
  cross: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 35,
  },
});

export default FlottingButton;
