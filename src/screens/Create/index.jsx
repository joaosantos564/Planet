import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
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
  const [populacao, setPopulacao] = useState("");
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [erro, setErro] = useState("");

  const handleValidar = () => {
    if (
      name === "" ||
      governante === "" ||
      titulo === "" ||
      data === "" ||
      loc === "" ||
      populacao === "" ||
      cor1 === "" ||
      cor2 === ""
    ) {
      setErro("Por favor, preencha todos os campos.");
      setTimeout(() => {
        setErro("");
      }, 3000); // Tempo limite de 3 segundos para limpar a mensagem de erro
    } else {
      setErro("");
      enviarFormulario();
    }
  };

  const enviarFormulario = () => {
    // Aqui você pode enviar os dados do formulário para um servidor, fazer uma requisição HTTP, etc.
    // Simulando o envio por 2 segundos
    setTimeout(() => {
      Alert.alert("Sucesso", "Formulário enviado com sucesso.");
    }, 2000);
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
      populacao,
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
    setPopulacao("");
    setCor1("");
    setCor2("");
  };

  return (
    <View style={styles.container}>
      {erro !== "" && <Text style={{ color: "red" }}>{erro}</Text>}
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
          placeholder="localização"
          style={styles.planetInput}
          onChangeText={setLoc}
          value={loc}
        />
        <TextInput
          placeholder="população"
          style={styles.planetInput}
          onChangeText={setPopulacao}
          value={populacao}
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleValidar();
            createPlanet();
          }}
        >
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
