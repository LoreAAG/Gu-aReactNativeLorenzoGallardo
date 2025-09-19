import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Aplicacion() {
  const insets = useSafeAreaInsets();

  const hobbies = ["Jugar videojuegos", "Leer libros", "Escuchar música", "Comer facturas", "Bailar regeton"];

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <Text style={styles.header}>Match o no</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.pinimg.com/236x/d4/74/07/d47407ee872de296c9bbfe88f32e8334.jpg" }}
        />

        <Text style={styles.name}>pepito</Text>
        <Text style={styles.info}>999999 años</Text>
        <Text style={styles.info}>Cordoba Argentina</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>me gusta</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Hobbies</Text>
        {hobbies.map((hobi, index) => (
          <Text key={index} style={styles.hobi}>
            - {hobi}
          </Text>
        ))}
      </ScrollView>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    color: "#333",
  },
  scroll: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
    color: "#222",
  },
  info: {
    fontSize: 15,
    color: "#555",
    marginBottom: 2,
  },
  button: {
    marginTop: 15,
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  titulo: {
    marginTop: 25,
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
  },
  hobby: {
    fontSize: 15,
    marginTop: 5,
    color: "#666",
  },
});
