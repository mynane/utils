import { firstLetterToUpperCase } from "../../src";

import * as chai from "chai";

const expect = chai.expect;
describe("firstLetterToUpperCase function test", () => {
  it("this function result should correct", () => {
    expect(firstLetterToUpperCase("abcd")).to.equal("Abcd");
    expect(firstLetterToUpperCase("1abcd")).to.equal("1abcd");
    expect(firstLetterToUpperCase("")).to.equal("");
  });
});
