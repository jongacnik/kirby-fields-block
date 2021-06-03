# Kirby Fields Block

Kirby [block preview](https://getkirby.com/docs/reference/plugins/extensions/blocks) plugin to directly render block fields, allowing for inline editing.

<img src="https://files.jongacnik.com/kirby-fields-preview-1.png" width="975" height="auto" />

## Usage

### Block definition

When creating a custom block in your blueprints, pass `preview: fields` to utilize this plugin

```yaml
blockname:
  name: Block Name
  preview: fields # required
  wysiwyg: true # recommended
  fields:
    text:
      label: Text
      type: text
```

Setting `wysiwyg: true` prevents drawer from automatically opening when creating a new block.

### Disable block title

You can disable the block title bar by passing `label: false`

```yaml
blockname:
  name: Block Name
  preview: fields
  wysiwyg: true 
  label: false # disables block title bar
  fields:
    text:
      label: Text
      type: text
```

<details>
  <summary>Example</summary>
  <img src="https://files.jongacnik.com/kirby-fields-preview-2.png" width="975" height="auto" />
</details>

### Collapse/Expand block

You can collapse or expand the block preview by double clicking the block title bar.

## Notes

- The block `icon` will appear in the title bar.
- Currently does not support blocks with tabs.

## Installation

```
composer require jg/kirby-fields-block
```

<details>
  <summary>Other installation methods</summary>

### Download

Download and copy this repository to `/site/plugins/kirby-fields-block`.

### Git submodule

```
git submodule add https://github.com/jongacnik/kirby-fields-block.git site/plugins/kirby-fields-block
```
</details>