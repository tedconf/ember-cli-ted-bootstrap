import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('ted-navbar', 'Integration | Component | ted navbar', {
  integration: true
});

/*
  Test doesn't work right now, bug with integration tests with components with link-tos. I think will be fixed in 1.13.

  https://github.com/switchfly/ember-test-helpers/issues/41
*/
// test('it renders the name', function(assert) {
//   this.render(hbs`{{ted-navbar name='My App'}}`);

//   var $navbar = this.$('.navbar');
//   assert.ok($navbar.text().match('My App'));
// });
