import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  borderColor?: string;
}

const Card = ({
  title,
  description,
  backgroundColor = "#fff",
  borderColor = "#fff",
}: CardProps) => (
  <View style={[styles.card, { backgroundColor, borderColor }]}> 
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>

    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
});

export default Card;
   