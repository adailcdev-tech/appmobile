import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProfileBadgeProps {
  initial: string;
  size?: number;
  color?: string;
}

const ProfileBadge = ({
  initial,
  size = 40,
  color = "#36200e",
}: ProfileBadgeProps) => (
  <View
    style={[
      styles.badge,
      { width: size, height: size, backgroundColor: color, borderRadius: size / 2 },
    ]}
  >
    <Text style={[styles.initials, { fontSize: size / 2 }]}>{initial}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  initials: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfileBadge;
