ember-cli-ted-bootstrap
=======================

Include TED Bootstrap in your ember-cli project

## Requirements

- ember-cli version '0.0.41' or later
- bower

### Installation

From your project's root, run

```
npm install --save-dev git+ssh://git@github.com/tedconf/ember-cli-ted-bootstrap.git
```

You'll now have access to TED bootstrap styles/js, and some extra components. See below for details.

## Usage

Refer to [TED bootsrap]() and [Bootstrap 3]() for docs. There are some additional components included.

### ted-navbar

A navbar for the top of your app.

![ted-navbar](docs/ted-navbar.png)

Usage:

```hbs
{{#ted-navbar name='Video Metrics'}}
  <ul class="dropdown-menu navbar-hamburger-dropdown" role="menu">
    <li><a href="http://inside.ted.com">Inside</a></li>
    <li class="divider"></li>
    <li><a href="http://cds.ted.com">CDS</a></li>
    <li><a href="http://dam.ted.com">DAM</a></li>
  </ul>
{{/ted-navbar}}
```

### ted-flaps

A subnav typically used for URL routes within your app.

![ted-flaps](docs/ted-flaps.png)

The list of links comes from a controller property. The component sets the
active class on the link if the route is active.

You can specify a custom label for the route by specifying a `label` key.

Usage:

```js
// controllers/application.js
import Ember from 'ember';

export default Ember.ObjectController.extend({

  linksMeta: [
    {name: 'delivery'},
    {name: 'partners'},
    {name: 'programming'},
    {name: 'talk-lookup', label: 'Search'},
  ]

});
```

```hbs
<!-- /application.hbs -->
{{ted-flaps links=linksMeta}}
```

```js
// router.js
import Ember from 'ember';

var Router = Ember.Router.extend({
  location: VideometricsNewENV.locationType
});

Router.map(function() {
  this.route('delivery');
  this.route('partners');
  this.route('programming');
  this.route('talk-lookup');
});

export default Router;

```


