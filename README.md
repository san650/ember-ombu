# ember-ombu

Really simple page objects for your acceptance tests

```js
import Ombu from 'ember-ombu';

var page = Ombu.create({
  visit: '/login',

  userName: ':text',
  password: ':password',

  submit: ':submit',

  message: '.message'
});

test('can log-in', function(assert) {
  visit(page);

  fillIn(page.userName, 'santiago');
  fillIn(page.password, 'secret');

  click(page.submit);

  andThen(function() {
    assert.equal(find(page.message).text(), 'Log-in successful!');
  });
});
```

See [Ombu](https://github.com/san650/ombu) for more information.

## Installation

```js
ember install ember-ombu
```

## Project's health

[![Build Status](https://travis-ci.org/san650/ember-ombu.svg?branch=master)](https://travis-ci.org/san650/ember-ombu)

## License

Ombu is licensed under the MIT license.

See [LICENSE.md](./LICENSE.md) for the full license text.
