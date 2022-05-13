import { ILectorDeTarjeta } from ".";

class Lector extends ILectorDeTarjeta {
  recibirTarjeta(): void {
    this.estacionamiento.verificarCodigoTarjeta("12", this);
  }
  devolverTarjeta(): void {
    throw new Error("Method not implemented.");
  }
  mostrarMensajeError(): void {
    throw new Error("Method not implemented.");
  }
  mostrarMensajeExito(): void {
    throw new Error("Method not implemented.");
  }
}

export default Lector;
