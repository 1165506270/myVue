
const sharedPropertyDefinition = {
  enumberable: true,
  configurable: true,
  get: _ => _,
  set: _ => _,
}

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return target[sourceKey][key];
  }
  sharedPropertyDefinition.set = function proxySetter(value) {
    target[sourceKey][key] = value;
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

export function initState(vm) {
  const opts = vm.$options

  if (opts.data) {
    initData(vm)
  }
}

function initData(vm) {
  let { data } = vm.$options
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}
  const keys = Object.keys(data);

  let i = keys.length;

  while(i--) {
    proxy(vm, '_data', keys[i]);
  }
}

function getData(data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    console.error(e)
  }
}

