/* tslint:disable */
/// <reference path="../typings/tsd.d.ts"/>

import { KidsSize } from "../src/helpers/kidsSize";
import * as chai from "chai";

const expect = chai.expect;

var kidsSize: any = null;

describe("caculate kids usa sizes", () => {
  before(() => {
    kidsSize = new KidsSize("brl");
  });

  it("convert simple BRL size to usa", () => {
    expect(kidsSize.clothes.convert("2").usa).to.equal("2 3");
  });

  it("convert shoes BRL size to usa", () => {
    expect(kidsSize.shoes.convert("30").usa).to.equal("11½");
  });

  it("get all available men shoes sizes", () => {
    expect(Object.keys(kidsSize.shoes.getSizes()).length).to.be.above(1);
  });
});
