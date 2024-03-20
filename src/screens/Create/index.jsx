import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Create() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title={"Create"} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("MyPlanets")}
      >
        <Text style={styles.buttonText}>Ver Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
