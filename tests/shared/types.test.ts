import { firstLetterToUpperCase, isString } from "../../src";

import * as chai from "chai";

const expect = chai.expect;
describe("isString function test", () => {
  it("this function result should correct", () => {
    expect(isString("abcd")).to.equal(true);
    expect(isString(1)).to.equal(false);
    expect(isString(undefined)).to.equal(false);
    expect(isString(null)).to.equal(false);
    expect(isString(false)).to.equal(false);
  });
});
