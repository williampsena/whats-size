/* tslint:disable */
/// <reference path="../typings/tsd.d.ts"/>

import { MenSize, WomenSize } from "../src/index";
import * as chai from "chai";

const expect = chai.expect;

describe("testing module import", () => {

  it("testing instance MenSize", () => {
    let menSize = new MenSize("brl");
    expect(menSize.getDataSizes).to.not.be.undefined;
  });

  it("testing instance WomenSize", () => {
    let womenSize = new WomenSize("brl");
    expect(womenSize.getDataSizes).to.not.be.undefined;
  });

  it("testing instance WomenSize > method getDataSizes", () => {
    let womenSize = new WomenSize("brl");

    expect(Object.keys(womenSize.getDataSizes()).length).to.be.above(1);
  });
});
