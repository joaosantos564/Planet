import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../models/planet/PlanetRepository";
import Planet from "../../models/planet/Planet";

export default function Create({ route }) {
  let { planet, edit } = route.params;

  const [name, setName] = useState("");
  const [governante, setGovernante] = useState("");
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [loc, setLoc] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [erro, setErro] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(planet.name);
      setGovernante(planet.governante);
      setTitulo(planet.titulo);
      setData(String(planet.data));
      setLoc(planet.loc);
      setPopulacao(planet.populacao);
      setCor1(planet.cor1);
      setCor2(planet.cor2);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [planet, edit]);

  const handlePlanetAction = () => {
    if (isUpdate) {
      planetsRepository.update(
        planet.id,
        name,
        governante,
        titulo,
        loc,
        populacao,
        cor1,
        cor2,
        parseInt(data) || 0
      );
      clearInputs();
    } else {
      const newPlanet = new Planet(
        name,
        governante,
        titulo,
        loc,
        populacao,
        cor1,
        cor2,
        parseInt(data) || 0
      );
      planetsRepository.add(newPlanet);
      clearInputs();
    }
    navigation.navigate("PlaExisting");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setName("");
    setGovernante("");
    setTitulo("");
    setData("");
    setLoc("");
    setPopulacao("");
    setCor1("");
    setCor2("");
  };

  // const handleValidar = () => {
  //   if (
  //     name === "" ||
  //     governante === "" ||
  //     titulo === "" ||
  //     data === "" ||
  //     loc === "" ||
  //     populacao === "" ||
  //     cor1 === "" ||
  //     cor2 === ""
  //   ) {
  //     setErro("Por favor, preencha todos os campos.");
  //     setTimeout(() => {
  //       setErro("");
  //     }, 3000); // Tempo limite de 3 segundos para limpar a mensagem de erro
  //   } else {
  //     setErro("");
  //     enviarFormulario();
  //   }
  // };

  // const enviarFormulario = () => {
  //   // Aqui você pode enviar os dados do formulário para um servidor, fazer uma requisição HTTP, etc.
  //   // Simulando o envio por 2 segundos
  //   setTimeout(() => {
  //     Alert.alert("Sucesso", "Formulário enviado com sucesso.");
  //   }, 2000);
  // };

  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Planeta" : "Novo Planeta"} />

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
        placeholder="Digite a data do planeta"
        style={styles.planetInput}
        onChangeText={setData}
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

      <TouchableOpacity style={styles.button} onPress={handlePlanetAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
