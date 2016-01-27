/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('ted-bootstrap', 'https://s3.amazonaws.com/ted.conferences.ted-bootstrap/v0.0.1.tar.gz');
  }
};
