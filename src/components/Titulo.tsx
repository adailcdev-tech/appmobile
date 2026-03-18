import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Titulo = () => {
  return (
    <View>
      <Text style={styles.titulo}>Tela de Login</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
  titulo: {
    fontFamily: "Arial",
    fontSize: 48,
    margin: 10,
    textAlign: "center",
    color: "#140663",
  },
})

