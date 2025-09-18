import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Saludo() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 40,
    color: "red",
  },
});