import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TaskTile = ({ id, title, completed, onChangedStatus, onDeleteTask }) => {
  return (
    <TouchableOpacity onPress={() => onChangedStatus(id)}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            style={styles.icon}
            source={
              completed
                ? require("../../../assets/icon_check.png")
                : require("../../../assets/icon_circle.png")
            }
          />
          <Text
            style={[styles.title, { color: completed ? "lightgrey" : "black" }]}
          >
            {title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onDeleteTask(id)}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icon_bin.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 30,
  },
});

export default TaskTile;
