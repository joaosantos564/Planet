import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Cards = ({ imagem, nome, desc }) => {
  const navigation = useNavigation();
  {
    return (
      <View style={styles.container}>
        <Image source={imagem} style={styles.img}></Image>
        <Text style={styles.nomeimg}>{nome}</Text>
        <Text style={styles.text}>{desc}</Text>
      </View>
    );
  }
};

export default Cards;
