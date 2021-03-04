import { invariant } from "./invariant";
import { isString } from "./types";

/**
 * first Letter to upper case
 * @param target the target string
 */
export const firstLetterToUpperCase = (target: string): string => {
  invariant(isString(target), "the parameter type is incorrect!");
  if (!target) return target;
  const arr = target.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
};
