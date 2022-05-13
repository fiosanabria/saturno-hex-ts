import { Lector, Barrera, Acceso } from "../../src/acceso.estacionamiento";
import Estacionamiento from "../../src/acceso.estacionamiento/Estacionamiento";
jest.mock("../../src/acceso.estacionamiento/Estacionamiento"); //now Estacionamiento is a mock constructor

import {
  IEstacionamiento,
  ILectorDeTarjeta,
} from "../../src/acceso.estacionamiento";

const estacionamiento: IEstacionamiento = new Estacionamiento(
  new Acceso(),
  new Barrera()
);
const lector: ILectorDeTarjeta = new Lector(estacionamiento);

beforeEach(() => {
  jest.clearAllMocks();
  lector.recibirTarjeta();
});

test("lector debe recibir la tarjeta y verificar codigo con el estacionamiento", () => {
  expect(estacionamiento.verificarCodigoTarjeta).toBeCalledWith("12", lector);
});
