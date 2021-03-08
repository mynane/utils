import {
  firstLetterToUpperCase,
  isArray,
  isBoolean,
  isNull,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isUndefined,
} from "../../src";

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

describe("isNumber function test", () => {
  it("this function result should correct", () => {
    expect(isNumber("abcd")).to.equal(false);
    expect(isNumber(1)).to.equal(true);
    expect(isNumber(undefined)).to.equal(false);
    expect(isNumber(null)).to.equal(false);
    expect(isNumber(false)).to.equal(false);
  });
});

describe("isNull function test", () => {
  it("this function result should correct", () => {
    expect(isNull("abcd")).to.equal(false);
    expect(isNull(1)).to.equal(false);
    expect(isNull(undefined)).to.equal(false);
    expect(isNull(null)).to.equal(true);
    expect(isNull(false)).to.equal(false);
  });
});

describe("isUndefined function test", () => {
  it("this function result should correct", () => {
    expect(isUndefined("abcd")).to.equal(false);
    expect(isUndefined(1)).to.equal(false);
    expect(isUndefined(undefined)).to.equal(true);
    expect(isUndefined(null)).to.equal(false);
    expect(isUndefined(false)).to.equal(false);
  });
});

describe("isBoolean function test", () => {
  it("this function result should correct", () => {
    expect(isBoolean("abcd")).to.equal(false);
    expect(isBoolean(1)).to.equal(false);
    expect(isBoolean(undefined)).to.equal(false);
    expect(isBoolean(null)).to.equal(false);
    expect(isBoolean(false)).to.equal(true);
  });
});

describe("isObject function test", () => {
  it("this function result should correct", () => {
    expect(isObject("abcd")).to.equal(false);
    expect(isObject(1)).to.equal(false);
    expect(isObject(undefined)).to.equal(false);
    expect(isObject(null)).to.equal(false);
    expect(isObject(false)).to.equal(false);
    expect(isObject({})).to.equal(true);
    expect(isObject(new Object())).to.equal(true);
  });
});

describe("isArray function test", () => {
  it("this function result should correct", () => {
    expect(isArray("abcd")).to.equal(false);
    expect(isArray(1)).to.equal(false);
    expect(isArray(undefined)).to.equal(false);
    expect(isArray(null)).to.equal(false);
    expect(isArray(false)).to.equal(false);
    expect(isArray([])).to.equal(true);
    expect(isArray(new Array())).to.equal(true);
  });
});

describe("isSymbol function test", () => {
  it("this function result should correct", () => {
    expect(isSymbol("abcd")).to.equal(false);
    expect(isSymbol(1)).to.equal(false);
    expect(isSymbol(undefined)).to.equal(false);
    expect(isSymbol(null)).to.equal(false);
    expect(isSymbol(false)).to.equal(false);
    expect(isSymbol(Symbol())).to.equal(true);
  });
});
