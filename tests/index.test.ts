import HelloWorld from "../src/index";
test("HelloWorld deberia ser --Hello World", () => {
  expect(HelloWorld).toBe("Hello World");
});
