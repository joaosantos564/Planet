import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import Planet from "../../models/planet/Planet";
import PlanetRepository from "../../models/planet/PlanetRepository";
import { planet } from "../../data/MyPlanets";
import TouchButton from "../../components/TouchButton";

const planetsList = new PlanetRepository();

let planetId = 1; // Inicia o ID do usuário

export default function Create() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [governante, setGovernante] = useState("");
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [loc, setLoc] = useState("");
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");

  const handleValidar = () => {
    if (email === "" || senha === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Outras validações podem ser adicionadas aqui

    // Se todas as validações passarem, envie o formulário

    enviarFormulario();
  };

  const [allPlanets, setAllPlanets] = useState([]);

  const createPlanet = () => {
    const newPlanet = new Planet(
      planetId++,
      name,
      governante,
      titulo,
      parseInt(data) || 0,
      loc,
      cor1,
      cor2
    ); // Incrementa o ID após o uso

    planetsList.add(newPlanet);
    setAllPlanets(planetsList.getAll());

    clearInputs();

    return newPlanet;
  };

  const clearInputs = () => {
    setName("");
    setGovernante("");
    setTitulo("");
    setData("");
    setLoc("");
    setCor1("");
    setCor2("");
  };

  return (
    <View style={styles.container}>
      <Title title={"Create"} />

      <View>
        <TextInput
          placeholder="Digite o nome do planeta"
          style={styles.planetInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Nome do governante"
          style={styles.planetInput}
          onChangeText={setGovernante}
          value={governante}
        />
        <TextInput
          placeholder="titulo do governante"
          style={styles.planetInput}
          onChangeText={setTitulo}
          value={titulo}
        />
        <TextInput
          placeholder="Digite a data de conquista"
          style={styles.planetInput}
          onChangeText={(text) => setData(text)}
          value={data}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="localiação"
          style={styles.planetInput}
          onChangeText={setLoc}
          value={loc}
        />
        <TextInput
          placeholder="cor primária"
          style={styles.planetInput}
          onChangeText={setCor1}
          value={cor1}
        />
        <TextInput
          placeholder="cor secundária"
          style={styles.planetInput}
          onChangeText={setCor2}
          value={cor2}
        />

        <TouchableOpacity style={styles.button} onPress={createPlanet}>
          <Text>Criar Planeta</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allPlanets.length > 0 ? (
          allPlanets.map((planet) => (
            <TouchableOpacity
              key={planet.id}
              onPress={() => navigation.navigate("MyPlanets", { data: planet })}
            >
              <Text>{planet.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Não há planetas cadastrados</Text>
        )}
      </View>

      <TouchButton
        route="PlaExisting"
        title="Planetas Existentes"
        data={planet}
      />
    </View>
  );
}
