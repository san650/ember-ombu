import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Ombu from 'ember-ombu';

moduleForAcceptance('Acceptance | page object');

test('it works', function(assert) {
  var page = Ombu.create({
    visit: '/',

    title: '#title'
  });

  visit(page);

  andThen(function() {
    assert.equal(find(page.title).text(), 'Welcome to Ember');
  });
});
