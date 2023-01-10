(function(){"use strict";const $="";function _(n,e,l,a,o,r,d,b){var t=typeof n=="function"?n.options:n;e&&(t.render=e,t.staticRenderFns=l,t._compiled=!0),a&&(t.functional=!0),r&&(t._scopeId="data-v-"+r);var i;if(d?(i=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),o&&o.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(d)},t._ssrRegister=i):o&&(i=b?function(){o.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:o),i)if(t.functional){t._injectStyles=i;var g=t.render;t.render=function(m,f){return i.call(f),g(m,f)}}else{var c=t.beforeCreate;t.beforeCreate=c?[].concat(c,i):[i]}return{exports:n,options:t}}const u={data(){return{isHidden:JSON.parse(sessionStorage.getItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`))}},methods:{toggle(){this.isHidden=!this.isHidden,sessionStorage.setItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`,this.isHidden)},preventSelect(n){n.detail>1&&(n.target.closest(".k-input")||n.preventDefault())}}};var p=function(){var e=this,l=e._self._c;return l("div",{staticClass:"k-block-fields-preview",attrs:{"data-hidden":e.isHidden},on:{mousedown:e.preventSelect}},[e.fieldset.label===null||e.fieldset.label?l("k-fields-block-title",{attrs:{content:e.content,fieldset:e.fieldset},on:{dblclick:e.toggle,toggle:e.toggle}}):e._e(),e.isHidden?e._e():l("k-form",{ref:"form",attrs:{autofocus:!0,fields:e.fieldset.tabs.content.fields,value:e.$helper.clone(e.content)},on:{input:function(a){return e.$emit("update",a)}}})],1)},k=[],v=_(u,p,k,!1,null,null,null,null);const h=v.exports;panel.plugin("jg/fields-block",{components:{"k-fields-block-title":{extends:"k-block-title",template:`
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
      `}},blocks:{fields:h}})})();
