import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Gato.jpg")} style={styles.imagen} />
      <Text style={styles.nombre}>Lorenzo Gallardo en cuestion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
});
