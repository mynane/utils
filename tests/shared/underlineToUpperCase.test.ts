import { underlineToUpperCase } from "../../src";

import * as chai from "chai";

const expect = chai.expect;
describe("underlineToUpperCase function test", () => {
  it("this function result should correct", () => {
    expect(underlineToUpperCase("abcd_efg")).to.equal("AbcdEfg");
    expect(underlineToUpperCase("abcd")).to.equal("Abcd");
    expect(underlineToUpperCase("1abcd")).to.equal("1abcd");
    expect(underlineToUpperCase("1abcd_123")).to.equal("1abcd_123");
    expect(underlineToUpperCase("")).to.equal("");
  });
});
