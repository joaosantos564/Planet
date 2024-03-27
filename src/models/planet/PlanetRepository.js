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

    if (planet) {
      this.id = id;
      this.name = name;
      this.governante = governante;
      this.titulo = titulo;
      this.data = data;
      this.loc = loc;
      this.populacao = populacao;
      this.cor1 = cor1;
      this.cor2 = cor2;
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
