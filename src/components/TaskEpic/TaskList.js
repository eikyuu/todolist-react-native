import React from "react";
import { FlatList } from "react-native";
import TaskTile from "./TaskTile";

const TaskList = ({ tasks, onChangedStatus, onDeleteTask }) => {
  const _renderItem = ({ item }) => (
    <TaskTile
      id={item.id}
      title={item.title}
      completed={item.completed}
      onChangedStatus={onChangedStatus}
      onDeleteTask={onDeleteTask}
    />
  );
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
