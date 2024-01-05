/**
 * @description A function that capitalize a string
 *
 * @function capitalize
 * @param {string} str A string
 * @returns {string} A capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
