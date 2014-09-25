# unicode-math.js

Unicode values for LaTeX math symbols.

### Installation

Install via npm.

```js
npm install unicode-math
```

### Basic Use

This library exports a JSON object for each symbol.

```js
var unicodeMath = require('unicode-math');

// Access values by its LaTeX symbol
unicodeMath['\\neg'];
```

Each entry has three properties:

- `unicode`: The unicode value
- `type`: The type
- `description`: A short description

### Credits

This library is a port of [unicode-math](https://github.com/wspr/unicode-math) by
[@wspr](https://github.com/wspr).

