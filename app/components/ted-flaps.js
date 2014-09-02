import Ember from 'ember';

export default Ember.Component.extend({

  niceLinks: function() {
    var links = [];
    this.get('links').forEach(function(link) {
      var copy = Ember.copy(link);

      copy.label = link.label || link.name.replace(/-|_/g, " ").capitalize();

      links.push(copy);
    });

    return links;
  }.property('links')

});