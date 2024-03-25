import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "./styles";
import Title from "../../components/Title";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import planetsRepository from "../../models/planet/PlanetRepository";

export default function PlaExisting() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = planetsRepository.getAll();
      setAllPlanets(planets);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title title="PlaExisting" />
      <Text>Tela de listagem de todos os planetas</Text>

      {allPlanets.length > 0 ? (
        <View style={styles.planetList}>
          {allPlanets.map((planet) => (
            <View key={planet.id} style={styles.planetItem}>
              <View>
                <Text style={styles.planetName}>{planet.name}</Text>
              </View>

              <View style={styles.planetActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() =>
                    navigation.navigate("MyPlanets", { data: planet })
                  }
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há planetas cadastrados</Text>
      )}
    </View>
  );
}

// export default function PlaExisting({ route }) {
//   const { data } = route.params;

//   return (
//     <View style={styles.container}>
//       <Title title="Planetas Existentes" />

//       <TouchButton route="Home" title="Go to Home" />

//       <View style={styles.planet}>
//         <Title title="Planetas" />
//         <Text style={styles.text}>{data.name}</Text>
//         <Text style={styles.text}>{data.governante}</Text>
//         <Text style={styles.text}>{data.titulo}</Text>
//         <Text style={styles.text}>{data.data}</Text>
//         <Text style={styles.text}>{data.loc}</Text>
//         <Text style={styles.text}>{data.populacao}</Text>
//         <Text style={styles.text}>{data.cor1}</Text>
//         <Text style={styles.text}>{data.cor2}</Text>
//       </View>
//     </View>
//   );
// }
