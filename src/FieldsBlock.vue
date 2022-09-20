<template>
  <div class="k-block-fields-preview" @mousedown="preventSelect">
    <k-block-title
      :content="content"
      :fieldset="fieldset"
      @dblclick="toggle"
      v-if="fieldset.label === null || fieldset.label"
      :class="{ 'with-border': !isHidden }"
    />
    <k-form
      ref="form"
      :autofocus="true"
      :fields="fieldset.tabs.content.fields"
      :value="$helper.clone(content)"
      @input="$emit('update', $event)"
      v-if="!isHidden"
    />
  </div>
</template>

<script>
export default {
  props: {
    hiddenByDefault: Boolean
  },
  data () {
    return {
      isHidden: null
    }
  },
  created() {
    //this value should come from (global) config
    this.hiddenByDefault = true;

    // Get Value of Hidden from LS and check if Value is set in LS, otherwise set to hiddenByDefault
    const hiddenBySession = JSON.parse(sessionStorage.getItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`));
    this.isHidden = (hiddenBySession !== null) ? hiddenBySession : this.hiddenByDefault;
  },
  methods: {
    toggle () {
      this.isHidden = !this.isHidden
      sessionStorage.setItem(`kirby.fieldsBlock.${this.$attrs.endpoints.field}.${this.$attrs.id}`, this.isHidden)
    },
    preventSelect (event) {
      if (event.detail > 1) {
        if(!event.target.closest('.k-input')) {
          event.preventDefault()
        }
      }
    }
  }
}
</script>

<style>
.k-block-fields-preview {
  margin: -0.75rem;
}

.k-block-fields-preview .k-block-title {
  padding: 0.75rem;
  background: #f7f7f7;
}

.k-block-fields-preview .k-block-title.with-border {
  border-bottom: 1px solid rgba(0,0,0,.1);
}

.k-block-fields-preview .k-form {
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;
}

/**
 * Reset `.k-layout-column .k-empty` overrides
 */

.k-block-fields-preview .k-empty {
  position: static !important;
  opacity: 1 !important;
  align-items: stretch !important;
  justify-content: flex-start !important;
  color: #777 !important;
  border: 1px dashed #ccc !important;
  border-radius: 1px !important;
}

.k-block-fields-preview .k-empty[data-layout="cards"] {
  justify-content: center !important;
}

.k-block-fields-preview .k-empty[data-layout="list"] .k-icon {
  border-right: 1px solid rgba(0,0,0,.05) !important;
}
</style>
