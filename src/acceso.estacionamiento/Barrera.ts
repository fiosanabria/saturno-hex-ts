import { IBarrera } from ".";

class Barrera implements IBarrera {
  elevar(): void {
    throw new Error("Method not implemented.");
  }
}

export default Barrera;
