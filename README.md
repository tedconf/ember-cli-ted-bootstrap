# Ember CLI TED Bootstrap

> This addon is prepared for internal use by TED and is open-sourced for educational purposes but will not be supported for shared community use.

This addon adds the latest build of TED Bootstrap from S3 to your Ember app's `bower.json` file, installs it, and imports the associated assets into your build.

This lets you independently update `ted-bootstrap` by updating the `bower.json` entry only. This is how other addons in the Ember ecosystem that rely on frontend assets work.

Refer to [Bootstrap 3's docs](http://getbootstrap.com/) for reference on how to use Bootstrap.

## Installation

This is an OSS Ember addon, so install with

```sh
ember install ember-cli-ted-bootstrap
```

If you're upgrading from a pre-1.0 version, make sure to run

```sh
ember g ember-cli-ted-bootstrap
```

to get the associated bower entry added to your `bower.json`.

## Components originally bundled in TED Bootstrap

Previous versions of `ember-cli-ted-bootstrap` came with three components: `<ted-navbar>`, `<ted-flaps`, and `<ted-panel>`.

- `<ted-navbar>` now belongs to a separate addon and `<ted-flaps>` is deprecated in favor of `<ted-nav>`. Both can be found on [Ember CLI TED Navs](http://tedconf.github.io/ember-ted-navs/).
- `<ted-panel>` is deprecated in favor of [Ember Collapsible Panel](http://tedconf.github.io/ember-collapsible-panel/).

These changes let us maintain and update the separate components more easily, and let developers update components independently, rather than needing to make sure everything in their app related to Bootstrap survives a large single upgrade.
