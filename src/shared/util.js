/**
 *缓存函数调用的结果
 *
 * @export
 * @param {Function} fn
 * @returns {Function}
 */
export function cached(fn) {
  const cache = Object.create(null)

  return function cachedFn(str) {
    const hit = cached[str]

    return hit || (cached[str] = fn(str))
  }
}
// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
export function isUndef (v: any): boolean %checks {
  return v === undefined || v === null
}

export function isDef (v: any): boolean %checks {
  return v !== undefined && v !== null
}

export function isTrue (v: any): boolean %checks {
  return v === true
}

export function isFalse (v: any): boolean %checks {
  return v === false
}
/**
 * Check if value is primitive.
 */
export function isPrimitive(value: any): boolean %checks {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
