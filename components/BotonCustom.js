import React from "react";
import { View, Text, Alert, Pressable, StyleSheet } from "react-native";

export default function BotonCustom() {
  const Alerta = () => {
    Alert.alert("ola");
    console.log("Presionado")
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.botonCustom,
          pressed && { backgroundColor: "red" },
        ]}
        onPress={Alerta}
      >
        <Text style={styles.textoBoton}>Botón Custom</Text>
      </Pressable>
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
    backgroundColor: "#3498db",
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
