/**
 * Wraps a function in a try/catch block and returns an array with the error and result
 * @param {function} func - Function to be executed
 * @returns {function(...args: any[]): Promise<[err: Error | null, result: any]>}}}
 */
export const attempt = function attempt(func) {
   return async function (...args) {
      try {
         return [null, await func(...args)]
      } catch (err) {
         return [err, undefined]
      }
   }
}