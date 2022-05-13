import Lector from "../../src/Lector";
import EstacionamientoFalse from "../../mocks/acceso.estacionamiento/EstacionamientoFalso";
import {
  IEstacionamiento,
  ILectorDeTarjeta,
} from "../../src/acceso.estacionamiento/interfaces";

const estacionamiento: IEstacionamiento = new EstacionamientoFalse();
const lector: ILectorDeTarjeta = new Lector(estacionamiento);

beforeEach(() => {
  jest.clearAllMocks();
  lector.recibirTarjeta();
});

test("lector debe recibir la tarjeta y verificar codigo con el estacionamiento", () => {
  expect(estacionamiento.verificarCodigoTarjeta).toBeCalledWith("12", lector);
});
