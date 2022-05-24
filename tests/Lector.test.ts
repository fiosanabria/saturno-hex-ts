import Lector from "../src/Lector";
import { ILectorDeTarjeta } from "../src/interfaces";
import EstacionamientoFalso from "../mocks/EstacionamientoFalso";

const estacionamiento = new EstacionamientoFalso();
const lector: ILectorDeTarjeta = new Lector(estacionamiento);

test("Deberia existir una clase Lector que implemente ILectorDeTarjeta", () => {
  expect(lector).toBeDefined();
});

test("Deberia ejecutarse el metodo recibirTarjeta sin problemas", () => {
  expect(() => lector.recibirTarjeta()).not.toThrow();
});

test("Tras recibir la tarjeta, el lector debe verificar el codigo de la tarjeta con el estacionamiento", () => {
  lector.recibirTarjeta();
  expect(estacionamiento.verificarCodigoTarjeta).toBeCalledWith("123", lector);
});

test("Deberia ejecutarse el metodo devolverTarjeta sin problemas", () => {
  expect(() => lector.devolverTarjeta()).not.toThrow();
});

test("Deberia ejecutarse el metodo mostrarMensajeError sin problemas", () => {
  expect(() => lector.mostrarMensajeError()).not.toThrow();
});

test("Deberia ejecutarse el metodo mostrarMensajeExito sin problemas", () => {
  expect(() => lector.mostrarMensajeExito()).not.toThrow();
});
