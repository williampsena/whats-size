/* tslint:disable */
/// <reference path="../typings/tsd.d.ts"/>

import { MenSize, WomanSize } from "../src/index";
import * as chai from "chai";

const expect = chai.expect;

describe("testing module import", () => {

  it("testing instance MenSize", () => {
    let menSize = new MenSize("brl");
    expect(menSize.getDataSizes).to.not.be.undefined;
  });

  it("testing instance WomanSize", () => {
    let womanSize = new WomanSize("brl");
    expect(womanSize.getDataSizes).to.not.be.undefined;
  });

  it("testing instance WomanSize > method getDataSizes", () => {
    let womanSize = new WomanSize("brl");

    expect(Object.keys(womanSize.getDataSizes()).length).to.be.above(1);
  });
});
