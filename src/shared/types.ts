import { TBasicType } from "../types";

const _ToStringCall = (target: TBasicType) =>
  Object.prototype.toString.call(target);

/**
 * 判断是否是字符串
 * @param target
 */
export const isString = (target: any) =>
  _ToStringCall(target) === "[object String]";

/**
 * 判断是否是数字
 * @param target
 */
export const isNumber = (target: any) =>
  _ToStringCall(target) === "[object Number]";

/**
 * 判断是否是boolean
 * @param target
 */
export const isBoolean = (target: any) =>
  _ToStringCall(target) === "[object Boolean]";

/**
 * 判断是否是null
 * @param target
 */
export const isNull = (target: any) =>
  _ToStringCall(target) === "[object Null]";

/**
 * 判断是否是undefined
 * @param target
 */
export const isUndefined = (target: any) =>
  _ToStringCall(target) === "[object Undefined]";

/**
 * 判断是否是object
 * @param target
 */
export const isObject = (target: any) =>
  _ToStringCall(target) === "[object Object]";

/**
 * 判断是否是array
 * @param target
 */
export const isArray = (target: any) =>
  _ToStringCall(target) === "[object Array]";

/**
 * 判断是否是symbol
 * @param target
 */
export const isSymbol = (target: any) =>
  _ToStringCall(target) === "[object Symbol]";
