import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Saludo from './components/Saludo.js'
import Presentacion from './components/Presentacion.js';
import Perfil from './components/Perfil.js';
import BotonCustom from './components/BotonCustom.js'
import Boton from './components/Boton.js'
import ScrollFrases from './components/ScrollFrases';
import TarjetaJuegos from './components/TarjetaJuegos.js'
import StatusBarra from './components/StatusBarra.js'
import Aplicacion from './components/Aplicacion.js';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          showsVerticalScrollIndicator={false}
        >
          <Saludo />
          <Presentacion />
          <Perfil />
          <BotonCustom />
          <Boton />
          <ScrollFrases />
          <View style={styles.section}>
          <TarjetaJuegos />
          </View>
          <View style={styles.section}>
          <Aplicacion />
          </View>
          </ScrollView>
          <StatusBarra />
          </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#f5f5f5", 
  },
  scrollContainer: {
    alignItems: "center", 
    paddingVertical: 20,
  },
  section: {
    width: "90%", 
    marginVertical: 15,
    alignItems: "center",
  },
});