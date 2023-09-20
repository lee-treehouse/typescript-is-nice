import { BigChair } from "./big-chair";
import { IChair } from "./chair";
import { LittleChair } from "./little-chair";
export class ChairFactory {
  static getChair = (label?: string): IChair => {
    if (label && label === "BIG") return new BigChair(140);
    return new LittleChair();
  };
}
