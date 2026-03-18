import React  from "react";
import { View, Text, StyleSheet } from "react-native";
interface CardProps {
    title: string;
    description: string;
    backgroundColor?: string;
    borderColor ?: string;
}
const card =({
    title,
    description,
    backgroundColor = '#fff',
    borderColor = ' #fff',

}: CardProps)=> (
    <View style={[StyleS.card,{backgroundColor, borderoColor}]}>
    <View> style={StyleS.header}>
    <View style={[StyleS.titlecePlaceholder, styles.textPlaceholder]} />
    </View>
    <View style ={[StyleS.descriptionPlaceholder, StyleSheet.textPlaceholder]} />
    </View>


);