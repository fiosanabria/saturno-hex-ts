const BarreraFalsa = jest.fn().mockImplementation(() => {
  return {
    elevar: jest.fn(),
  };
});

export default BarreraFalsa;
