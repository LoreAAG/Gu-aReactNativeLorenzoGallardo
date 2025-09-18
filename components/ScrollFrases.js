import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function ScrollFrases() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.frase}>ola 2</Text>
        <Text style={styles.frase}>ola 3</Text>
        <Text style={styles.frase}> ola 5</Text>
        <Text style={styles.frase}>ola 622</Text>
        <Text style={styles.frase}>ola 112</Text>
        <Text style={styles.frase}>ola 22</Text>
        <Text style={styles.frase}>ola 3123</Text>
        <Text style={styles.frase}> ola 512</Text>
        <Text style={styles.frase}>ola 63</Text>
        <Text style={styles.frase}>ola 12</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  scroll: {
    padding: 20,
  },
  frase: {
    fontSize: 18,
    marginBottom: 15,
    color: "#2c3e50",
  },
});