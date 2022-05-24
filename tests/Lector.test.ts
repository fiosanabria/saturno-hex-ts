import Lector from "../src/Lector";
import { ILectorDeTarjeta } from "../src/interfaces";
import EstacionamientoFalso from "../mocks/EstacionamientoFalso";

const estacionamiento = new EstacionamientoFalso();
const lector: ILectorDeTarjeta = new Lector(estacionamiento);

test("Deberia existir una clase Lector que implemente ILectorDeTarjeta", () => {
  expect(lector).toBeDefined();
});
