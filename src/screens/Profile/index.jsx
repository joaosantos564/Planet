import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Title from "../../components/Title";
import CardText from "../../components/CardText";
import Cards from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Cards
        nome={"João Oliveira"}
        imagem={require("../../../assets/picME.jpg")}
        desc={"Aluno e Criador da Scire-CO"}
      />
      <CardText
        titulo={"Sobre a empresa:"}
        text={
          "Somos uma empresa focada em Vestibular e estudos diários. Nosso foco é você e sua vida acadêmica, disponibilizamos conteúdos diários sobre matérias de seu interesse e também notícias de diversas áreas."
        }
      />
    </View>
  );
}
