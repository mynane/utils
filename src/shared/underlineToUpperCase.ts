import { firstLetterToUpperCase } from "./firstLetterToUpperCase";
import { invariant } from "./invariant";
import { isString } from "./types";

/**
 * underline to upper case
 * @param target the target string
 */
export const underlineToUpperCase = (target: string): string => {
  invariant(isString(target), "the parameter type is incorrect!");
  if (!target) return target;
  return firstLetterToUpperCase(
    target.replace(/_([a-z])/g, function (all, letter) {
      return letter.toUpperCase();
    })
  );
};
