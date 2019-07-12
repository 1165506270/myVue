export default class VNode {
    constructor(
        tag: string,
        data: VNodeData,
        children: ?Array<VNode>,
        text: string,
        elm: Node,
        context?: Component,
        componentOptions?: VNodeComponentOptions,
        asyncFactory?: Function
    ) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
        this.ns = undefined
        this.context = context
        this.fnContext = undefined
        this.fnOptions = undefined
        this.fnScopeId = undefined
        this.key = data && data.key
        this.componentOptions = componentOptions
        this.componentInstance = undefined
        this.parent = undefined
        this.raw = false
        this.isStatic = false
        this.isRootInsert = true
        this.isComment = false
        this.isCloned = false
        this.isOnce = false
        this.asyncFactory = asyncFactory
        this.asyncMeta = undefined
        this.isAsyncPlaceholder = false
    },

    get child () {
        return this.componentInstance;
    }
}
export const createEmptyVNode = (text) => {
  const node = new VNode()
  node.text = text
  node.isComment = true
  return node
}
export function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}