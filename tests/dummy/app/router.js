import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('one-fish');
  this.route('two-fish');
  this.route('red-fish');
  this.route('blue-fish');
});

export default Router;
