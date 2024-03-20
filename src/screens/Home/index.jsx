import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { useNavigation } from "@react-navigation/native";
import { user } from "../../data/Profile";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Home - Hello" />
    </View>
  );
}
