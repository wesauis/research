import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = ({ text }) => (
  <View style={styles.task}>
    <View style={styles.left}>
      <View style={styles.square}></View>
      <Text style={styles.text}>{text}</Text>
    </View>
    <View style={styles.circle}></View>
  </View>
);

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    marginRight: 15,
  },
  circle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#55bcf6",
  },
});

export default Task;
