import { Chair } from "./chair";

export class LittleChair extends Chair {
  constructor() {
    console.log("I added a custom constructor just to log this message");
    super();
  }
}
