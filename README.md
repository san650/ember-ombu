# ember-ombu
[![Build Status](https://travis-ci.org/san650/ember-ombu.svg?branch=master)](https://travis-ci.org/san650/ember-ombu)
![Latest version](https://img.shields.io/npm/v/ember-ombu.svg)

Really simple page objects for your acceptance tests

## Installation

```js
ember install ember-ombu
```

## Synopsis

```js
import Ombu from 'ember-ombu';

var page = Ombu.create({
  visit: '/login',

  login: {
    scope: 'form',

    userName: ':text',
    password: ':password',

    submit: ':submit'
  },


  message: '.message'
});

test('can log-in', function(assert) {
  visit(page); // => visit('/login');

  fillIn(page.login.userName, 'santiago'); // => fillIn('form :text', 'santiago')
  fillIn(page.login.password, 'secret'); // => fillIn('form :password', 'secret')

  click(page.login.submit); // => click('form :submit')

  andThen(function() {
    assert.equal(find(page.message).text(), 'Log-in successful!');
    // => find('.message').text()
  });
});
```

See [Ombu](https://github.com/san650/ombu) for more information.

## Project's health

[![Build Status](https://travis-ci.org/san650/ember-ombu.svg?branch=master)](https://travis-ci.org/san650/ember-ombu)

## License

Ombu is licensed under the MIT license.

See [LICENSE.md](./LICENSE.md) for the full license text.
