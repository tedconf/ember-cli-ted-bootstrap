var fs   = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-ted-bootstrap',
  included: function included(app) {
    this.app = app;

    var emberCLIVersion = app.project.emberCLIVersion();
    if (emberCLIVersion < '0.0.41') {
      throw new Error('ember-cli-ted-bootstrap requires ember-cli version 0.0.41 or greater.\n');
    }

    var options         = app.options['ember-cli-ted-bootstrap'] || {};
    var modulePath      = path.relative(app.project.root, __dirname);
    var bootstrapPath   = 'vendor/ted_bootstrap/dist/';
    var otherAssetsPath = path.join(bootstrapPath, 'ted_bootstrap');
    var otherAssets     = fs.readdirSync(path.join(modulePath, otherAssetsPath));

    // Import css/js from bootstrap
    app.import(path.join(bootstrapPath, 'ted_bootstrap.css'));
    app.import(path.join(bootstrapPath, 'ted_bootstrap.js'));

    // Import other assets
    otherAssets.forEach(function(file) {
      app.import(path.join(otherAssetsPath, file), { destDir: '/assets/ted_bootstrap' });
    });
  }
};
