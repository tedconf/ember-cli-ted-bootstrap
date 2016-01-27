/* jshint node: true */
'use strict';

var fs   = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-ted-bootstrap',

  included: function included(app) {
    // var options = app.options['ember-cli-ted-bootstrap'] || {};

    let tedBootstrapPath = path.join(app.bowerDirectory, 'ted-bootstrap');
    var additionalAssetsPath = path.join(tedBootstrapPath, 'ted_bootstrap');
    var otherAssets = fs.readdirSync(additionalAssetsPath);

    // Import JS, CSS
    app.import(path.join(tedBootstrapPath, 'ted_bootstrap.css'));
    app.import(path.join(tedBootstrapPath, 'ted_bootstrap.js'));

    // Import all other assets
    otherAssets.forEach(function(file) {
      app.import(path.join(additionalAssetsPath, file), { destDir: '/assets/ted_bootstrap' });
    });
  },
};
