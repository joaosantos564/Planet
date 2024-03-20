export default class PlanetRepository {
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

  update(id, name, data, loc, governante, populacao, titulo, cor1, cor2) {
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
