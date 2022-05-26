import {IAcceso} from "./interfaces"

class Acceso implements IAcceso {
    grabarUltimoAcceso(codigoTarjeta: string): void {
        console.log("Grabando");
        
    }

}

export default Acceso;