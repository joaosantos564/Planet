import { View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";

export default function Profile({ route }) {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Title title={"Profile"} />
      <Text>Nome:{user.name}</Text>
      <Text>Idade:{user.age}</Text>
      <Text>Nome:{user.email}</Text>
    </View>
  );
}
