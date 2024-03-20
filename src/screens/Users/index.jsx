import { View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";
import { user } from "../../data/Profile";
import User from "../../models/user/User";
import UserRepository from "../../models/user/UserRepository";

export default function MyPlanets() {
  return (
    <View style={styles.container}>
      <Title title={"Teste"} />
    </View>
  );
}
