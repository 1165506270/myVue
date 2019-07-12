export * from './element'

export function query(el) {
  if (typeof el === 'string') {
    const seleted = document.querySelector(el)
    if (!seleted) {
      return document.createElement('div')
    }
    return seleted
  } else {
    return el
  }
}
