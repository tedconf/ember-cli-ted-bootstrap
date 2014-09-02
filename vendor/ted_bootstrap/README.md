# TED Bootstrap

A front-end bootstrap for internal TED projects.
Provides the following:

* [sass-rails](https://github.com/rails/sass-rails)
* [compass-rails](https://github.com/Compass/compass-rails)
* [bootstrap-sass](https://github.com/twbs/bootstrap-sass/)
* [font-awesome-sass](https://github.com/FortAwesome/font-awesome-sass)
* [haml](https://github.com/haml/haml)
* [redcarpet](https://github.com/vmg/redcarpet)
* A TED-like theme for Bootstrap 3
* Swatches to demonstrate and preview TED Bootstrap

For basic details on how to use Bootstrap, please consult
[Bootstrap's documentation](http://getbootstrap.com/css/):
because this gem is based on Bootstrap itself, almost
everything that's explained there also applies here!

## Installation

Add this line to your Rails app's Gemfile:

    gem 'ted_bootstrap', git: 'git@github.com:tedconf/ted_bootstrap.git'

And then execute:

    $ bundle update ted_bootstrap

Finally, put the following at the top of your app's application.scss:

    @import "ted_bootstrap";

And this at the top of your app's application.js:

    //= require jquery
    //= require jquery_ujs
    //= require ted_bootstrap

## Swatches

This gem also adds /swatch routes to your application. i.e., from
your application's root url, simply add /swatch and you should see
a handy little style guide with examples of how to use Bootstrap
markup to produce common TED-like components and whatnot.

## Development

### Setting up a development environment

Developing front-end libraries through a gem is ridiculously tedious,
so TED Bootstrap includes configuration for an extremely lightweight
Rails app so's you can preview its swatches live. Start the server
like so:

    bundle exec rackup -p 3000 -s thin

Now point your browser to http://localhost:3000/swatch where you can
preview changes you make to the gem.

### Adding your app to the Hamburger

Listing a new app in the hamburger menu is very simple, simply open
[/app/views/ted_bootstrap/_header.html.haml](https://github.com/tedconf/ted_bootstrap/blob/master/app/views/ted_bootstrap/_header.html.haml)
and add new list items for the additional apps. e.g.:

    %li{role: :presentation}
      %a{href: 'http://myapp.ted.com'} My App

### Making CSS changes

First, check
[vendor/assets/stylesheets/ted_bootstrap/_variables.scss](https://github.com/tedconf/ted_bootstrap/blob/master/vendor/assets/stylesheets/ted_bootstrap/_variables.scss)
to see if there's a variable controlling the change you want to make.
If so, yay!

Otherwise, take a look through
[the bootstrap-sass partials](https://github.com/twbs/bootstrap-sass/tree/master/vendor/assets/stylesheets/bootstrap)
to find a partial controlling the class or component you want to
tweak. Then, find or create a corresponding partial in this repo's
[vendor/assets/stylesheets/ted_bootstrap](https://github.com/tedconf/ted_bootstrap/blob/master/vendor/assets/stylesheets/ted_bootstrap)
directory with your tweaks.
Finally, make sure the ted_bootstrap partial you created or changed
is listed in
[vendor/assets/stylesheets/ted_bootstrap/_imports.scss](https://github.com/tedconf/ted_bootstrap/blob/master/vendor/assets/stylesheets/ted_bootstrap/_imports.scss)
_after_ the corresponding "bootstrap/" import. e.g.:

    @import "bootstrap/navbar";
    @import "navbar";

Ideally, you should also create a Swatch we can use to track
differences between TED Bootstrap and the default Bootstrap theme.

### Building static assets

A precomputed static version of TED bootstrap is available in the dist
folder. To build these assets run:

```
rake dist
```

And check the changes into git so other developers can use them.
