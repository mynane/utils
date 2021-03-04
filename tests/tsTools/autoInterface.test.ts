import { autoInterface, firstLetterToUpperCase, isString } from "../../src";

import * as chai from "chai";

const expect = chai.expect;
describe("autoInterface function test", () => {
  it("this function result should correct", () => {
    expect(autoInterface("test", "hello", {})).to.equal(undefined);
    expect(autoInterface("test", "hello", {}, false)).to.equal(
      "// testhello\n\nexport default interface test {\n\t\n}"
    );
    expect(autoInterface("test", "hello", { a: 1, b: "a" }, false)).to.equal(
      "// testhello\n\nexport default interface test {\n\ta?:number;\n\tb?:string\n}"
    );
  });
});
