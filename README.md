Trie Data Structure
===================

Trie implementation in javascript, with insert and search functions

## Installation

  npm install trie-data-structure --save

## Usage

  var trie = require('trie')

  trie.build(["apple","orange","yellow","black"]);

  console.log('search for part word "app", returns : ' + trie.search("app")[0]);

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.4 Initial release
