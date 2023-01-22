## Escodegen ES modules version

Escodegen ES modules version is forked Escodegen.

Escodegen ([escodegen](http://github.com/estools/escodegen)) is an
[ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
(also popularly known as [JavaScript](http://en.wikipedia.org/wiki/JavaScript))
code generator from [Mozilla's Parser API](https://developer.mozilla.org/en/SpiderMonkey/Parser_API)
AST. See the [online generator](https://code4fukui.github.io/escodegen/demo/)
for a demo.

### Usage

A simple example: the program

```JavaScript
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

const res = escodegen.generate({
  type: 'BinaryExpression',
  operator: '+',
  left: { type: 'Literal', value: 40 },
  right: { type: 'Literal', value: 2 },
});
console.log(res);
```

produces the string `'40 + 2'`.

See the [API page](https://github.com/estools/escodegen/wiki/API) for
options. To run the tests, execute `npm test` in the root directory.

### Sample with esprima

```JavaScript
import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

const program = "const answer = 42"
const tokens = esprima.tokenize(program);
console.log(tokens);
const ast = esprima.parseScript(program);
console.log(ast);
const res = escodegen.generate(ast);
console.log(res);
```

### License

#### Escodegen

Copyright (C) 2012 [Yusuke Suzuki](http://github.com/Constellation)
 (twitter: [@Constellation](http://twitter.com/Constellation)) and other contributors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
