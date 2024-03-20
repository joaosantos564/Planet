import { Text, View } from "react-native";
import TouchButton from "../../components/TouchButton";

import styles from "./styles";
import Title from "../../components/Title";

export default function MyPlanets({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="My Planets" />

      <View style={styles.planet}>
        <Title title="Planet" />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.governante}</Text>
        <Text style={styles.text}>{data.loc}</Text>
      </View>
    </View>
  );
}
