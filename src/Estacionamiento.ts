import { IEstacionamiento, ILectorDeTarjeta } from "./interfaces";
import Lector from "./Lector";

class Estacionamiento extends IEstacionamiento{
    verificarCodigoTarjeta(codigoTarjeta: string, lectorConTarjeta: ILectorDeTarjeta): void {
        console.log("verifica");
        if(codigoTarjeta === "123"){
            this.acceso.grabarUltimoAcceso("123")
        }
       if(codigoTarjeta === "456"){
            this.acceso.grabarUltimoAcceso("456")
            this.barrera.elevar()
            lectorConTarjeta.mostrarMensajeExito()
        }
        if(codigoTarjeta === "789"){
            lectorConTarjeta.mostrarMensajeError()
        }
    }

}

export default Estacionamiento;