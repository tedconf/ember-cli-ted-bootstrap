import Ember from 'ember';
const { capitalize } = Ember.String;

export default Ember.Component.extend({

  niceLinks: Ember.computed('links', function() {
    var links = [];
    this.get('links').forEach(function(link) {
      var copy = Ember.copy(link);

      copy.label = link.label || capitalize(link.name.replace(/-|_/g, " "));

      links.push(copy);
    });

    return Ember.A(links);
  })

});
