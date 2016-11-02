/* tslint:disable */
/// <reference path="../typings/tsd.d.ts"/>

import { MenSize } from "../src/helpers/menSize";
import * as chai from "chai";

const expect = chai.expect;

var menSize: any = null;

describe("caculate men usa sizes", () => {
  before(() => {
    menSize = new MenSize("brl");
  });

  it("convert simple BRL size to usa", () => {
    expect(menSize.simple.convert("gg").usa).to.equal("xl");
  });

  it("convert shoes BRL size to usa", () => {
    expect(menSize.shoes.convert("42").usa).to.equal("10½");
  });

  it("convert shirt BRL size to usa", () => {
    expect(menSize.shirts.convert("4").usa).to.equal("16½ 17");
  });

  it("convert suits BRL size to usa", () => {
    expect(menSize.suits.convert("46").usa).to.equal("36");
  });
});
