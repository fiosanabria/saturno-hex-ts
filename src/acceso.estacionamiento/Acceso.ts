import { IAcceso } from ".";

class Acceso implements IAcceso {
  grabarUltimoAcceso(codigoTarjeta: string): void {
    throw new Error("Method not implemented.");
  }
}

export default Acceso;
