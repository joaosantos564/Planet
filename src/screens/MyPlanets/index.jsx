import { Text, View } from "react-native";
import TouchButton from "../../components/TouchButton";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import PlanetRepository from "../../models/planet/PlanetRepository";

export default function MyPlanets({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("Form", { planet: data, edit: true });
  };

  const deletePlanet = () => {
    PlanetRepository.remove(data.id);
    navigation.navigate("Planets");
  };

  return (
    <View style={styles.container}>
      <Title title="My Planets" />

      {data ? (
        <Text>Detalhes do Planeta</Text>
      ) : (
        <Text>Selecione um planeta para exibir seus detalhes</Text>
      )}

      <View style={styles.planet}>
        <View style={styles.planetDetail}>
          <Title title="Planet" />
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.governante}</Text>
          <Text style={styles.text}>{data.loc}</Text>
        </View>

        <View style={styles.planetActions}>
          <TouchableOpacity style={styles.editButton} onPress={editPlanet}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deletePlanet}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
