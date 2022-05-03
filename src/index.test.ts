import HelloWorld from "./index";
test("HelloWorld deberia ser --Hello World", () => {
  expect(HelloWorld).toBe("Hello World");
});
