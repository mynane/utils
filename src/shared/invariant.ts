/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
export type basicType = string | number | undefined | null | boolean;

export const INVARIANT_LACK_OF_FORMAT_PARAMETER_ERROR = `Minified exception occurred; use the non-minified dev environment 
for the full error message and additional helpful warnings.`;

export function invariant(
  condition: boolean,
  format?: string,
  a?: basicType,
  b?: basicType,
  c?: basicType,
  d?: basicType,
  e?: basicType,
  f?: basicType
) {
  if (!condition) {
    let error;
    if (format === undefined) {
      error = new Error(INVARIANT_LACK_OF_FORMAT_PARAMETER_ERROR);
    } else {
      const args = [a, b, c, d, e, f];
      let argIndex = 0;
      error = new Error(
        format.replace(/%s/g, () => {
          return `${args[argIndex++]}`;
        })
      );
      error.name = "Invariant Violation";
    }

    // error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}
