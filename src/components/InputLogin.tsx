import React from "react"
import { TextInput, StyleSheet } from "react-native"

const InputLogin = () => {
  return (
    <TextInput
      placeholder="Login"
      style={styles.input}
    />
  )
}

export default InputLogin

const styles = StyleSheet.create({
  input: {
    width: 300, //largura
    height: 40, //altura
    borderWidth: 1.5, //largura da borda
    borderColor: "#ae0d0d",
    borderRadius: 5, //arredondamento da borda
    paddingHorizontal: 10, //espaçamento interno horizontal
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 12, //espaçamento inferio
    color: "#000", //cor da fonte
  },
})