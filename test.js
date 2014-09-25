var assert = require('assert');
var latexSymbols = require('./');

assert(latexSymbols instanceof Object);
assert(Object.keys(latexSymbols).length > 50);
