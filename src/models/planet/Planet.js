export default class Planet {
  constructor(
    id,
    imgLink,
    name,
    data,
    loc,
    governante,
    populacao,
    titulo,
    cor1,
    cor2
  ) {
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
}
