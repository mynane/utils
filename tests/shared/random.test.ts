import { randomClose, randomLeftOpen, randomOpen } from "../../src";

import * as chai from "chai";

const expect = chai.expect;
describe("random function test", () => {
  it("randomClose function result should correct", () => {
    expect(randomClose(4, 5)).to.lessThan(6);
    expect(randomLeftOpen(4, 5)).to.greaterThan(3);
  });
  it("randomOpen function result should correct", () => {
    expect(randomOpen(4, 5)).to.lessThan(6);
    expect(randomLeftOpen(4, 5)).to.greaterThan(3);
  });
  it("randomLeftOpen function result should correct", () => {
    expect(randomLeftOpen(4, 5)).to.lessThan(6);
    expect(randomLeftOpen(4, 5)).to.greaterThan(3);
  });
});
