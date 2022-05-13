import { Lector, Barrera, Acceso } from "../../src/acceso.estacionamiento";
import Estacionamiento from "../../src/acceso.estacionamiento/Estacionamiento";
jest.mock("../../src/acceso.estacionamiento/Estacionamiento");

const estacionamiento = new Estacionamiento(new Acceso(), new Barrera());
const lector = new Lector(estacionamiento);

test("lector debe recibir la tarjeta y verificar codigo con el estacionamiento", () => {
  lector.recibirTarjeta();
  expect(estacionamiento.verificarCodigoTarjeta).toBeCalledWith("12", lector);
});
