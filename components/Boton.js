import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";

export default function Boton() {
  const mostrarAlerta = () => {
    Alert.alert("oli");
    console.log("se presiono")
  };

  return (
    <View style={styles.container}>
      <Button title="Presionar" onPress={mostrarAlerta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botonCustom: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});