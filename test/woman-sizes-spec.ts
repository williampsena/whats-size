/* tslint:disable */
/// <reference path="../typings/tsd.d.ts"/>

import { WomanSize } from "../src/helpers/womanSize";
import * as chai from "chai";

const expect = chai.expect;

var womanSize: any = null;

describe("caculate woman usa sizes", () => {
  before(() => {
    womanSize = new WomanSize("brl");
  });

  it("convert simple BRL size to usa", () => {
    expect(womanSize.simple.convert("g").usa).to.equal("l");
  });

  it("convert shoes BRL size to usa", () => {
    expect(womanSize.shoes.convert("37").usa).to.equal("6½");
  });

  it("convert skirts BRL size to usa", () => {
    expect(womanSize.skirts.convert("38").usa).to.equal("4");
  });

  it("convert dresses BRL size to usa", () => {
    expect(womanSize.dresses.convert("44").usa).to.equal("10");
  });
});
