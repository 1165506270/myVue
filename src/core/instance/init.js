import {initState} from './state';

export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        const vm = this;

        // vm.uid ++;
        vm.$options = options
        initState(vm);

        if(vm.$options.el) {
            
        }
    }
}
