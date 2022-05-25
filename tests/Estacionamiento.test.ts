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

test("Si el codigo a verificar es 123, este debe ser aceptado y se debe grabar el ultimo acceso", () => {
  estacionamiento.verificarCodigoTarjeta("123", lector);
  expect(acceso.grabarUltimoAcceso).toBeCalledWith("123");
});

test("Si el codigo a verificar es 456, este debe ser aceptado y se debe grabar el ultimo acceso", () => {
  estacionamiento.verificarCodigoTarjeta("456", lector);
  expect(acceso.grabarUltimoAcceso).toBeCalledWith("456");
});

test("Si el codigo a verificar es 456, este debe ser aceptado y se debe elevar la barrera", () => {
  estacionamiento.verificarCodigoTarjeta("456", lector);
  expect(barrera.elevar).toBeCalled();
});

test("Si el codigo a verificar es 456, este debe ser aceptado y se debe enviar un mensaje de exito al lector", () => {
  estacionamiento.verificarCodigoTarjeta("456", lector);
  expect(lector.mostrarMensajeExito).toBeCalled();
});
