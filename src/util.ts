function getTag(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

function isObject(value: any) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

export function omit(object: any, remove: string[]) {
  const newObj = { ...object };
  for (const n of remove) {
    delete newObj[n];
  }
  return newObj;
}

export function isFunction(value: any) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = getTag(value);
  return ['[object Function]', '[object AsyncFunction]', '[object GeneratorFunction]', '[object Proxy]'].includes(tag);
}
