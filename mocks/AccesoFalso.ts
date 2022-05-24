const AccesoFalso = jest.fn().mockImplementation(() => {
  return {
    grabarUltimoAcceso: jest.fn(),
  };
});

export default AccesoFalso;
