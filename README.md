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
import { test } = 'qunit';
import Ombu from 'ember-ombu';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

const page = Ombu.create({
  visit: '/login',

  form: {
    email: '[data-test-email]',
    password: '[data-test-password]',
    errorMessage: '[data-test-error-message]',
    submit: 'button[type=submit]',
  }
});

moduleForAcceptance('Acceptance | login');

test('show error message on invalid input', async function() {
  visit(page);                                       // => visit('/login');

  const {email, password, errorMessage, submit} = page.form;

  await fillIn(email, 'john@example.com');           // => fillIn('[data-test-email]', 'john@example.com')
  await fillIn(password, 'secret');                  // => fillIn('[data-test-email]', 'john@example.com')
  await click(submit);                               // => click('button[type=submit]');

  assert.equal(find(errorMessage).text().trim(),     // => assert.equal(find('[data-test-error-message]').text().trim(),
    'Invalid email and password combination');       //       'Invalid email and password combination');
});
```

See [Ombu](https://github.com/san650/ombu) for more information.

## Project's health

[![Ember Observer Score](https://emberobserver.com/badges/ember-ombu.svg)](https://emberobserver.com/addons/ember-ombu)
[![Build Status](https://travis-ci.org/san650/ember-ombu.svg?branch=master)](https://travis-ci.org/san650/ember-ombu)
[![Maintainability](https://api.codeclimate.com/v1/badges/525ca3e2404154f50596/maintainability)](https://codeclimate.com/github/san650/ember-ombu/maintainability)
[![dependencies Status](https://david-dm.org/san650/ember-ombu/status.svg)](https://david-dm.org/san650/ember-ombu)
[![devDependencies Status](https://david-dm.org/san650/ember-ombu/dev-status.svg)](https://david-dm.org/san650/ember-ombu?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/san650/ember-ombu/badge.svg?branch=master)](https://coveralls.io/github/san650/ember-ombu?branch=master)

## License

Ombu is licensed under the MIT license.

See [LICENSE.md](./LICENSE.md) for the full license text.
