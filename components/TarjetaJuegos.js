import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TarjetaJuegos() {
  const insets = useSafeAreaInsets(); // 🔹 obtiene márgenes seguros

  const juegos = [
    {
      title: "Minecraft",
      score: 8,
      description: "Construir",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EUxGckm1v1KS8GcQuudfJ4RyR57y3gdkwA&s",
    },
    {
      title: "Sonic Mania",
      score: 10,
      description:
        "El doctor eggman consiguió una piedra que le permitirá viajar en el tiempo, Sonic tendrá que detenerlo pasando por escenarios de juegos suyos viejos",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000000809/2292c70c99e9a181e9e3a60f42961da13a9e80e5178954bb8c42f5ffda379849",
    },
    {
      title: "Silksong",
      score: 11,
      description:
        "Trata de un bichito llamado Hornet y que tiene que matar a palos a otros bichos",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLhZF5xYvuhhNKAKZ889NnguIAn5bHBCg-DXaSvTDgcWPChqTIuE9YQ7xS-tdPgreR2Ie-Z5nqqCE8YmGM2MGLk6V2ul-ve21q3hvpWng",
    },
    {
      title: "Hollow Knight",
      score: 7,
      description: "Un bichito que se baja a trompadas a todos",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg?t=1695270428",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,       // 🔹 espacio arriba (notch / barra de estado)
        paddingBottom: insets.bottom, // 🔹 espacio abajo (gestures / barra home)
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <ScrollView>
        {juegos.map((juego, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: juego.image }} style={styles.image} />
            <Text style={styles.title}>{juego.title}</Text>
            <Text>Puntaje: {juego.score}</Text>
            <Text>{juego.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
