import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task.js";

// remove outline on input elements
if (Platform.OS === "web") {
  const style = document.createElement("style");
  style.textContent = `textarea, select, input, button { outline: none!important; }`;
  document.head.append(style);
}

export default function App() {
  const [newTask, setNewTask] = useState();
  const [tasks, setTasks] = useState(new Array(32).fill("abc"));

  function addNewTask() {
    if (!newTask || newTask.match(/^\s*$/)) {
      // task is null, undefined or made of empty characters
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function completeTask(index) {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }

  return (
    <View style={styles.body}>
      <StatusBar animated style="auto" />

      <View style={styles.wrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.taskList}>
          {tasks.map((task, id) => (
            <TouchableOpacity key={id} onPress={() => completeTask(id)}>
              <Task text={task} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.footer}
      >
        <TextInput
          style={styles.input}
          placeholder="What do you need to do?"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addNewTask}
        />
        <TouchableOpacity onPress={addNewTask}>
          <View style={styles.addView}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  wrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskList: {
    marginTop: 30,
    marginBottom: 15 + 50,
  },
  footer: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: "75%",
  },
  addView: {
    marginRight: 15,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {},
});
