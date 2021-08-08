/**
 * Gets a value from the environment key 
 * 
 * @param {*} envvar var name
 * @param {*} type type cast
 * @param {*} keep returns false if value must be disposed
 * @returns the parsed value for the required `envvar`
 */
function ENV(envvar, type = String, keep = (_) => _) {
  let envval = process.env[envvar] ?? type(process.env[envvar]);

  return keep(envval) ? envval : null;
}

/** negates the result of `fn`*/
const not =
  (fn) =>
  (...args) =>
    !fn(...args);

module.exports = {
  PORT: ENV("PORT", Number, not(isNaN)) || 4000,
};
