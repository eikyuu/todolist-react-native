import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Header from "./src/components/_Shared/Header/Header";
import TaskContainer from "./src/components/TaskEpic/TaskContainer";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TaskContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
