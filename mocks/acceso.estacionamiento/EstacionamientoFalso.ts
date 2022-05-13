const EstacionamientoFalso = jest.fn().mockImplementation(() => ({
  verificarCodigoTarjeta: jest.fn(),
}));

export default EstacionamientoFalso;
