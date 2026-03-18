import React from "react";
import { View, StyleSheet } from "react-native";
import Titulo from "./src/components/Titulo";
import SubTitulo from "./src/components/SubTitulo";
import InputLogin from "./src/components/InputLogin";
import InputSenha from "./src/components/InputSenha";
import Botao from "./src/components/Botao";

const App = () => {
  return (
    <View style={styles.view}>
      <Titulo />
      <SubTitulo />
      <InputLogin />
      <InputSenha />
      <Botao />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
  },
})