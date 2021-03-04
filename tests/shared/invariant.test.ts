import { invariant, INVARIANT_LACK_OF_FORMAT_PARAMETER_ERROR } from "../../src";

import * as chai from "chai";

const expect = chai.expect;
describe("invariant function test", () => {
  it("this function result should correct", () => {
    try {
      invariant(false, "1");
    } catch (error) {
      expect(error.message).to.equal("1");
    }
    try {
      invariant(false, "1%s", 2);
    } catch (error) {
      expect(error.message).to.equal("12");
    }
    try {
      invariant(false, "1%s%s%s%s%s", 2, false, "12", null, undefined);
    } catch (error) {
      expect(error.message).to.equal("12false12nullundefined");
    }
  });
  it("invariant lack of format parameter error", () => {
    try {
      invariant(false);
    } catch (error) {
      expect(error.message).to.equal(INVARIANT_LACK_OF_FORMAT_PARAMETER_ERROR);
    }
  });
});
