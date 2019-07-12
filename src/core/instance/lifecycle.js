import Watcher from '../observer/watcher';

export function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if(!vm.$options.render) {
        
    }
    callHook(vm, 'beforeMount');
    let updateComponent;
    updateComponent = () => {
        vm._update(vm._render(), hydrating);
    }

    new Watcher(vm, updateComponent, _ => _, {
        before () {
            if(vm._isMounted && !vm.isDestroyed) {
                callHook(vm, 'beforeUpdate');
            }
        }
    }, true /* 表示这是一个renderWatcher */);

    if(vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, 'mounted');
    }
    return vm;

}