import { dimension } from "./dimension";

export interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): dimension;
}

export abstract class Chair implements IChair {
  height: number;
  width: number;
  depth: number;

  constructor(height: number = 100, width: number = 70, depth: number = 70) {
    console.log(`a ${this.constructor.name} was instantiated`);
    this.height = height;
    this.width = width;
    this.depth = depth;
  }

  getDimensions(): dimension {
    return { height: this.height, width: this.width, depth: this.depth };
  }
}
