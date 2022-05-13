import { IEstacionamiento, ILectorDeTarjeta } from ".";

class Estacionamiento extends IEstacionamiento {
  verificarCodigoTarjeta(codigo: string, lector: ILectorDeTarjeta): void {
    throw new Error("Method not implemented.");
  }
}

export default Estacionamiento;
