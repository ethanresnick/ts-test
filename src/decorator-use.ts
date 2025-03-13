import { type A } from "./type-export.js";

export function Test() {
  return undefined as any as ParameterDecorator;
}

export class X {
  constructor(@Test() x: A) {}
}