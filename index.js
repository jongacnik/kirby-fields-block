(function() {
  "use strict";
  const FieldsBlock_vue_vue_type_style_index_0_lang = "";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main = {
    data() {
      return {
        isHidden: JSON.parse(sessionStorage.getItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`))
      };
    },
    methods: {
      toggle() {
        this.isHidden = !this.isHidden;
        sessionStorage.setItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`, this.isHidden);
      },
      preventSelect(event) {
        if (event.detail > 1) {
          if (!event.target.closest(".k-input")) {
            event.preventDefault();
          }
        }
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-block-fields-preview", attrs: { "data-hidden": _vm.isHidden }, on: { "mousedown": _vm.preventSelect } }, [_vm.fieldset.label === null || _vm.fieldset.label ? _c("k-fields-block-title", { attrs: { "content": _vm.content, "fieldset": _vm.fieldset }, on: { "dblclick": _vm.toggle, "toggle": _vm.toggle } }) : _vm._e(), !_vm.isHidden ? _c("k-form", { ref: "form", attrs: { "autofocus": true, "fields": _vm.fieldset.tabs.content.fields, "value": _vm.$helper.clone(_vm.content) }, on: { "input": function($event) {
      return _vm.$emit("update", $event);
    } } }) : _vm._e()], 1);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/Users/jongacnik/Sites/_kirby/kirby-fields-block/src/FieldsBlock.vue";
  const FieldsBlock = __component__.exports;
  panel.plugin("jg/fields-block", {
    components: {
      "k-fields-block-title": {
        extends: "k-block-title",
        template: `
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
      `
      }
    },
    blocks: {
      fields: FieldsBlock
    }
  });
})();
