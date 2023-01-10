import FieldsBlock from "./FieldsBlock.vue"

panel.plugin("jg/fields-block", {
  components: {
    'k-fields-block-title': {
      extends: 'k-block-title',
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
})