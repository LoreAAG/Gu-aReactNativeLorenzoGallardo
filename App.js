import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './components/Saludo.js'
import Presentacion from './components/Presentacion.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludo/>
      <Presentacion/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
});
