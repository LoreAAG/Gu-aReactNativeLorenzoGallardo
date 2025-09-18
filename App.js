import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './components/Saludo.js'
import Presentacion from './components/Presentacion.js';
import Perfil from './components/Perfil.js';
import BotonCustom from './components/BotonCustom.js'
import Boton from './components/Boton.js'
import ScrollFrases from './components/ScrollFrases';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludo/>
      <Presentacion/>
      <Perfil/>
      <BotonCustom/>
      <Boton/>
        <ScrollFrases/>
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
