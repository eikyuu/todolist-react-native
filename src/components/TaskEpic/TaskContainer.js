import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import CounterContainer from "./CounterContainer";
import FlottingButton from "../_Shared/FloattingButton/FlottingButton";
import { getTasks } from "../../redux/reducers/selectors";

const TaskContainer = (props) => {
  const tasks = useSelector(getTasks);

  const [isFormOpened, setIsFormOpened] = useState(false);

  // const onAddTask = (title) => {
  //   const newTask = { id: new Date().getTime(), title, completed: false };
  //   setTasks([newTask, ...tasks]);
  // };

  // const onChangedStatus = (id) => {
  //   let newTasks = [];
  //   tasks.forEach((task) => {
  //     if (task.id === id) {
  //       newTasks.push({
  //         id: id,
  //         title: task.title,
  //         completed: !task.completed,
  //       });
  //     } else {
  //       newTasks.push(task);
  //     }
  //   });
  //   setTasks(newTasks);
  // };

  // const onDeleteTask = (id) => {
  //   let newTask = [];
  //   tasks.forEach((task) => {
  //     if (task.id !== id) {
  //       newTask.push(task);
  //     } else {
  //       setTasks(newTask);
  //     }
  //   });
  // };

  const getTasksCompleted = () => {
    let counter = 0;

    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });

    return counter;
  };

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm />}
      <CounterContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TaskList tasks={tasks} />
      <FlottingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default TaskContainer;
