import Estacionamiento from "../src/Estacionamiento";
import { IEstacionamiento } from "../src/interfaces";
import AccesoFalso from "../mocks/AccesoFalso";
import BarreraFalsa from "../mocks/BarreraFalsa";

const barrera = new BarreraFalsa();
const acceso = new AccesoFalso();

const estacionamiento: IEstacionamiento = new Estacionamiento(acceso, barrera);

test("Deberia existir una clase Estacionamiento que implemente IEstacionamiento", () => {
  expect(estacionamiento).toBeDefined();
});
