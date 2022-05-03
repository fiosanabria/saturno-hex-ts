import { ILectorDeTarjeta } from "../interfaces";

class App {
  constructor(private readonly lector: ILectorDeTarjeta) {}

  init() {
    this.lector.recibirTarjeta();
  }
}
