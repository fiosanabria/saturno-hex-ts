import Barrera from "../src/Barrera";
import { IBarrera } from "../src/interfaces";

const barrera: IBarrera = new Barrera();

test("Deberia existir una clase Barrera que implemente IBarrera", () => {
  expect(barrera).toBeDefined();
});
