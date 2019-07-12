import Vue from '../../../core/index';
import {mountComponent} from '../../../core/instance/lifecycle';

Vue.prototype.$mount = function (el) {
    el = el && query(el);
    return mountComponent(this, el);
}