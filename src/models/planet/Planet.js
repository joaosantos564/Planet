export default class Planet {
  constructor(id, imgLink, name, data, loc, governante, titulo, cor1, cor2) {
    this.id = id;
    this.imgLink = imgLink;
    this.name = name;
    this.governante = governante;
    this.titulo = titulo;
    this.data = data;
    this.loc = loc;
    this.cor1 = cor1;
    this.cor2 = cor2;
  }
}
