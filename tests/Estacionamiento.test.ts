import Estacionamiento from "../src/Estacionamiento";
import { IEstacionamiento } from "../src/interfaces";
import AccesoFalso from "../mocks/AccesoFalso";
import BarreraFalsa from "../mocks/BarreraFalsa";
import LectorFalso from "../mocks/LectorFalso";

const barrera = new BarreraFalsa();
const acceso = new AccesoFalso();
const lector = new LectorFalso();

const estacionamiento: IEstacionamiento = new Estacionamiento(acceso, barrera);

test("Deberia existir una clase Estacionamiento que implemente IEstacionamiento", () => {
  expect(estacionamiento).toBeDefined();
});

test("Deberia ejecutarse el metodo verificarCodigoTarjeta sin problemas", () => {
  expect(() =>
    estacionamiento.verificarCodigoTarjeta("123", lector)
  ).not.toThrow();
});
