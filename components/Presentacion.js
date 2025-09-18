import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Presentacion() {
  return (
    <View style={styles.container}>
        <Text style={styles.nombre}>Lorenzo Gallardo</Text>
        <Text style={styles.curso}>Sexto año ProA</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10, 
  },
  curso: {
    fontSize: 18,
    color: "#16a085",
  },
});