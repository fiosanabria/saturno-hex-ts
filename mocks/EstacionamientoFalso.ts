const EstacionamientoFalso = jest.fn().mockImplementation(() => {
  return {
    verificarCodigoTarjeta: jest.fn(),
  };
});

export default EstacionamientoFalso;
