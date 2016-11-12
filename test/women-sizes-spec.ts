/* tslint:disable */
/// <reference path="../typings/tsd.d.ts"/>

import { WomenSize } from "../src/helpers/womenSize";
import * as chai from "chai";

const expect = chai.expect;

var womenSize: any = null;

describe("caculate women usa sizes", () => {
  before(() => {
    womenSize = new WomenSize("brl");
  });

  it("convert simple BRL size to usa", () => {
    expect(womenSize.simple.convert("g").usa).to.equal("l");
  });

  it("convert shoes BRL size to usa", () => {
    expect(womenSize.shoes.convert("37").usa).to.equal("6½");
  });

  it("convert skirts BRL size to usa", () => {
    expect(womenSize.skirts.convert("38").usa).to.equal("4");
  });

  it("convert dresses BRL size to usa", () => {
    expect(womenSize.dresses.convert("44").usa).to.equal("10");
  });

  it("get all available women dresses sizes", () => {
    expect(Object.keys(womenSize.dresses.getSizes()).length).to.be.above(1);
  });
});
