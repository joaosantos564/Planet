import { Text, View, TouchableOpacity, Image } from "react-native";
import TouchButton from "../../components/TouchButton";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../models/planet/PlanetRepository";

export default function MyPlanets({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("Create", { planet: data, edit: true });
  };

  const deletePlanet = () => {
    planetsRepository.remove(data.id);
    navigation.navigate("PlaExisting");
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
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.governante}</Text>
          <Text style={styles.text}>{data.titulo}</Text>
          <Text style={styles.text}>{data.data}</Text>
          <Text style={styles.text}>{data.loc}</Text>
          <Text style={styles.text}>{data.populacao}</Text>
          <Text style={styles.text}>{data.cor1}</Text>
          <Text style={styles.text}>{data.cor2}</Text>
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
