import Acceso from "../src/Acceso";
import { IAcceso } from "../src/interfaces";

const acceso: IAcceso = new Acceso();

test("Deberia existir una clase Acceso que implemente IAcceso", () => {
  expect(acceso).toBeDefined();
});

test("Deberia ejecutarse el metodo guardarUltimoAcceso sin problemas", () => {
  acceso.grabarUltimoAcceso("123456789");
});
