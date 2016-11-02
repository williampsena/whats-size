/* tslint:disable */
/// <reference path="../typings/tsd.d.ts"/>

import { MenSize, WomanSize } from "../src/index";
import * as chai from "chai";

const expect = chai.expect;

describe("testing module import", () => {

  it("testing instance MenSize", () => {
    let menSize = new MenSize("brl");
  });

  it("testing instance WomanSize", () => {
    let womanSize = new WomanSize("brl");
  });
});
