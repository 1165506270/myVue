import { query } from './util/index';
import {cached} from '../../shared/util';

import Vue from './rumtime/index';

const idToTemplate = cached(id => {
  const el = query(id);
  return el && el.innerHTML;
})

const mount = Vue.prototype.$mount;

Vue.prototype.$mount = function(el) {
  el = el && query(el)

  if (e === document.body || el === document.documentElement) {
    console.error(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }

  const options = this.$options;

  if(!options.render) {
    let template = options.template;

    if(template) {
      if(typeof template === 'string') {
        if(template.charAt(0) === '#') {
          template = idToTemplate(template);
        }
      } else if(template.nodeType) {
        template = template.innerHTML;
      } else if (el) {
        template = getOuterHTML(el);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.error('invalid template option:' + template, this)
        }
        return this
      }
    } 
    if(template) {
      const {render, staticRenderFns} = compileToFunctions(template);
  
      options.render = render;
      options.staticRenderFns = staticRenderFns;
    }
  }
  return mount.call(this, el);
}

function getOuterHTML(el) {
  if(el.outerHTML) {
    return el.outerHTML;
  } else {
    const container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

// Vue.compile = compileToFunctions;

export default Vue;