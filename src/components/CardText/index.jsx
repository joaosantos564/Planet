import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const CardText = ({ titulo, text }) => {
  const navigation = useNavigation();
  {
    return (
      <View style={styles.container1}>
        <Text style={styles.nomeimg}>{titulo}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
};

export default CardText;
