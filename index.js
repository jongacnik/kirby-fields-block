panel.plugin("jg/fields-block", {
  blocks: {
    fields: `
      <div class="k-block-fields-preview">
        <template>
          <k-block-title
            :content="content"
            :fieldset="fieldset"
            @dblclick="$emit('open')"
            v-if="fieldset.label === null || fieldset.label"
          />
          <k-form
            ref="form"
            :autofocus="true"
            :fields="fieldset.tabs.content.fields"
            :value="$helper.clone(content)"
            @input="$emit('update', $event)"
          />
        </template>
      </div>
    `
  }
});