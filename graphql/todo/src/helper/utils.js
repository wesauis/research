const { randomBytes } = require("crypto");
const { ApolloError } = require("apollo-server");

/** Creates a enum object where each key equals its value.
 *
 * ```js
 * createEnum("FOO", "BAR") === { FOO: "FOO", BAR: "BAR" }
 * ```
 *
 * @template {string[]} T
 * @param {T} items
 * @returns {{ [V in T[number]]: V }}
 */
function createEnum(...items) {
  const enumObj = {};
  for (const item of items) {
    // define all keys as consts
    Object.defineProperty(enumObj, item, { value: item, writable: false });
  }
  return enumObj;
}

function createId() {
  return randomBytes(16).toString("hex");
}

function throwError(code, message = code) {
  throw new ApolloError(message, code);
}

module.exports = {
  createEnum,
  createId,
  throwError,
};
