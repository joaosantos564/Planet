export default class Planet {
  constructor(name, governante, titulo, data, loc, populacao, cor1, cor2) {
    this.id = this.generateId();
    this.name = name;
    this.governante = governante;
    this.titulo = titulo;
    this.data = data;
    this.loc = loc;
    this.populacao = populacao;
    this.cor1 = cor1;
    this.cor2 = cor2;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}
