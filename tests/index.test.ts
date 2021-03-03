import Utils from "../src";

import * as chai from "chai";

const expect = chai.expect;
describe("My math library", () => {
  it("should be able to add things correctly", () => {
    expect(Utils()).to.equal("123");
  });
});
