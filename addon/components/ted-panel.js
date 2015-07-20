import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['isOpen'],

  didInsertElement: function() {
    var _this = this;
    var collapsibleEl = _this.$('.ted-panel-collapse');

    this.$('.ted-panel-collapse').collapse({toggle: false});
    this.set('isOpen', collapsibleEl.hasClass('in'));

    this.$('.ted-panel-toggle').click(function(e) {
      e.preventDefault();

      _this.set('isOpen', !collapsibleEl.hasClass('in'));
      collapsibleEl.collapse('toggle');
    });
  }

});
