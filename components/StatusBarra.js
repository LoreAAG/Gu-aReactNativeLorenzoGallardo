import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function StatusBarra() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>ola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 20,
  },
});