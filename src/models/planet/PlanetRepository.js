import { planet } from "../../data/MyPlanets";
import Planet from "./Planet";

class PlanetsRepository {
  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  add(planet) {
    this.planets.push(planet);
  }

  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  update(id, name, governante, titulo, data, loc, populacao, cor1, cor2) {
    const planet = this.get(id);

    // // console.log("id", id);
    // // console.log("nome", name);
    // // console.log("governante", governante);
    // // console.log("titulo", titulo);
    // // console.log("data", data);
    // // console.log("loc", loc);
    // // console.log("populacao", populacao);
    // // console.log("cor1", cor1);
    // // console.log("cor2", cor2);

    // console.log("encontrou o planeta?", planet);

    if (planet) {
      planet.id = id;
      planet.name = name;
      planet.governante = governante;
      planet.titulo = titulo;
      planet.data = data;
      planet.loc = loc;
      planet.populacao = populacao;
      planet.cor1 = cor1;
      planet.cor2 = cor2;
    }
    return planet;
  }
}

const planetsRepository = new PlanetsRepository();
const newPlanet = new Planet(
  planet.name,
  planet.governante,
  planet.titulo,
  parseInt(planet.data) || 0,
  planet.loc,
  planet.populacao,
  planet.cor1,
  planet.cor2
);

planetsRepository.add(newPlanet);

export default planetsRepository;
