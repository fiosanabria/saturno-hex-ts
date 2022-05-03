import LectorDeTarjetas from "./LectorDeTarjetas";
import { ISeguridadEstacionamiento } from "../interfaces";

const MockSeguridad = jest.fn().mockImplementation(() => {
  return {
    verificarCodigoTarjeta: jest.fn(),
  };
});

beforeEach(() => {
  MockSeguridad.mockClear();
});

test("El lector debe recibir una tarjeta y verificar el codigo 12345 con la seguridad del estacionamiento", () => {
  const seguridad: ISeguridadEstacionamiento = new MockSeguridad();
  const lector: LectorDeTarjetas = new LectorDeTarjetas(seguridad);
  lector.recibirTarjeta();
  expect(seguridad.verificarCodigoTarjeta).toHaveBeenCalledWith(
    "12345",
    lector
  );
});
