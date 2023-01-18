(function(){"use strict";const $="";function p(s,e,i,a,o,r,d,h){var t=typeof s=="function"?s.options:s;e&&(t.render=e,t.staticRenderFns=i,t._compiled=!0),a&&(t.functional=!0),r&&(t._scopeId="data-v-"+r);var n;if(d?(n=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),o&&o.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(d)},t._ssrRegister=n):o&&(n=h?function(){o.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:o),n)if(t.functional){t._injectStyles=n;var b=t.render;t.render=function(m,f){return n.call(f),b(m,f)}}else{var c=t.beforeCreate;t.beforeCreate=c?[].concat(c,n):[n]}return{exports:s,options:t}}const _={data(){return{isCollapsed:JSON.parse(sessionStorage.getItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`))}},created(){console.log(this.collapse)},methods:{toggle(){this.isCollapsed=!this.isCollapsed,sessionStorage.setItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`,this.isCollapsed)},preventSelect(s){s.detail>1&&(s.target.closest(".k-input")||s.preventDefault())}}};var u=function(){var e=this,i=e._self._c;return i("div",{staticClass:"k-block-fields-preview",attrs:{"data-collapsed":e.isCollapsed},on:{mousedown:e.preventSelect}},[e.fieldset.label===null||e.fieldset.label?i("k-fields-block-title",{attrs:{content:e.content,fieldset:e.fieldset},on:{dblclick:e.toggle,toggle:e.toggle}}):e._e(),e.isCollapsed?e._e():i("k-form",{ref:"form",attrs:{autofocus:!0,fields:e.fieldset.tabs.content.fields,value:e.$helper.clone(e.content)},on:{input:function(a){return e.$emit("update",a)}}})],1)},k=[],v=p(_,u,k,!1,null,null,null,null);const g=v.exports;panel.plugin("jg/fields-block",{components:{"k-fields-block-title":{extends:"k-block-title",template:`
        <div class="k-block-title" v-on="$listeners">
          <k-icon :type="icon" class="k-block-icon" />
          <span class="k-block-name">
            {{ name }}
          </span>
          <span v-if="label" class="k-block-label">
            {{ label }}
          </span>
          <span class="k-fields-block-toggle" v-on:click="$emit('toggle')">
            <k-icon type="angle-up"/>
          </span>
        </div>
      `}},blocks:{fields:g}})})();
