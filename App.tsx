import React from "react";
import { View } from "react-native";
import Card from "./src/components/Card";
import ProfileBadge from "./src/components/ProfileBadge";
import { globalStyles } from "./src/components/GlobalStyles";

export default function App() {
return (
  <View style={globalStyles.container}>
    <Card
      title='Design Responsivo'
      description='Layouts que se adaptam a diferentes tamanhos de tela e orientações.'
      backgroundColor='#fff0f0'
      borderColor='#fff0f0'
    />
    <Card
      title="Performance"
      description="Otimização para dispositivos móveis"
      borderColor="#ffcc80"
    />
    <View style={globalStyles.profileContainer}>
    <ProfileBadge initial="MR" size={50} color="#ff5722" />
    <ProfileBadge initial="AB" size={50} color="#4caf50" />
    <ProfileBadge initial="ZC" size={32}/>
    </View>
    </View>
);}

