# escodegen

[
![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD--2--Clause-blue.svg)
](LICENSE.BSD)

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project is an ES Module fork of the original [estools/escodegen](http://github.com/estools/escodegen), a robust, well-tested [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) (JavaScript) code generator. It generates code from a syntax tree that conforms to the [Mozilla Parser API](https://developer.mozilla.org/en/SpiderMonkey/Parser_API).

This version is designed for direct use in modern environments like browsers and Deno, without requiring a build step or local installation.

## Usage

You can import `escodegen` directly from the CDN in your project.

A simple example:

```javascript
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

const ast = {
  type: 'BinaryExpression',
  operator: '+',
  left: { type: 'Literal', value: 40 },
  right: { type: 'Literal', value: 2 },
};

const code = escodegen.generate(ast);
console.log(code);
```

This program produces the string `'40 + 2'`.

## Usage with a Parser (esprima)

`escodegen` is often used with a parser like `esprima` to modify and regenerate JavaScript code.

```javascript
import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

const program = "const answer = 42";
const ast = esprima.parseScript(program);

// You can manipulate the AST here

const generatedCode = escodegen.generate(ast);
console.log(generatedCode); // 'const answer = 42;'
```

## API Reference

This fork maintains compatibility with the original `escodegen` API. For a complete list of code generation options, please refer to the **[original API documentation](https://github.com/