import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function PlaExisting({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Planetas Existentes" />

      <TouchButton route="Home" title="Go to Home" />

      <View style={styles.planet}>
        <Title title="Planetas" />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.governante}</Text>
        <Text style={styles.text}>{data.titulo}</Text>
        <Text style={styles.text}>{data.data}</Text>
        <Text style={styles.text}>{data.loc}</Text>
        <Text style={styles.text}>{data.cor1}</Text>
        <Text style={styles.text}>{data.cor2}</Text>
      </View>
    </View>
  );
}
