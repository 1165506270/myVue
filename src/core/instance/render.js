import { createElement } from '../../vdom/create-element'
import VNode, { createEmptyVNode } from '../../vdom/vnode'

export function initRender(vm) {
  // 编译template生成的render函数调用
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  // 手工写render时调用
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}

export function renderMixin(Vue) {
  Vue.prototype._render = function() {
    const vm = this
    const { render, _parentNode } = vm.$options;

    vm.$vnode = _parentNode;

    let vnode;

    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch(e) {
      console.error(e, 'render');
      vnode = vm._vnode;
    }

    if(Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }

    if(!(vnode instanceof VNode)) {
      console.error('Multiple root nodes returned from render function. Render function ' +
      'should return a single root node.', vm);
    }
    vnode = createEmptyVNode();
  }
  vnode.parent = _parentNode;
  return vnode;
}
