/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ombu',

  options: {
    nodeAssets: {
      ceibo: function() {
        return {
          enabled: this.app.tests,
          import: ['index.js']
        };
      },
      ombu: function() {
        return {
          enabled: this.app.tests,
          import: ['index.js']
        };
      }
    }
  },

  treeFor: function() {
    if (!this.app.tests) {
      return;
    }

    return this._super.treeFor.apply(this, arguments);
  }
};
