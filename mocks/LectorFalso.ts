const LectorFalso = jest.fn().mockImplementation(() => {
  return {
    recibirTarjeta: jest.fn(),
    devolverTarjeta: jest.fn(),
    mostrarMensajeError: jest.fn(),
    mostrarMensajeExito: jest.fn(),
  };
});

export default LectorFalso;
