import { ILectorDeTarjeta } from "../interfaces";

class LectorDeTarjetas extends ILectorDeTarjeta {
  recibirTarjeta(): void {
    this.seguridad.verificarCodigoTarjeta("12345", this);
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

export default LectorDeTarjetas;
