# unicode-math.js

Unicode values for LaTeX math symbols.

### Installation

Install via npm.

```js
npm install unicode-math
```

### Basic Use

This library exports an object that contains each symbol.

```js
var unicodeMath = require('unicode-math');

// Access values by its LaTeX symbol
unicodeMath['\\neg'];
```

Each entry has three properties:

- `codePoint`: The unicode value as a number
- `type`: The type
- `description`: A short description

### Credits

This library is a port of [unicode-math](https://github.com/wspr/unicode-math) by
[@wspr](https://github.com/wspr).

