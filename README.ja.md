# escodegen

[
![ライセンス: BSD-2-Clause](https://img.shields.io/badge/License-BSD--2--Clause-blue.svg)
](LICENSE.BSD)

本プロジェクトは、堅牢で十分にテストされた [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) (JavaScript) コードジェネレーターであるオリジナルの [estools/escodegen](http://github.com/estools/escodegen) を ES Module 化したフォークです。[Mozilla Parser API](https://developer.mozilla.org/en/SpiderMonkey/Parser_API) に準拠した構文木からコードを生成します。

このバージョンは、ビルドステップやローカルへのインストールを必要とせず、ブラウザーや Deno などのモダンな環境で直接使用できるように設計されています。

## 使い方

プロジェクト内で CDN から直接 `escodegen` をインポートできます。

シンプルな例:

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

このプログラムは文字列 `'40 + 2'` を生成します。

## パーサー (esprima) との併用

`escodegen` は、JavaScript コードを変更して再生成するために、`esprima` のようなパーサーとよく一緒に使用されます。

```javascript
import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

const program = "const answer = 42";
const ast = esprima.parseScript(program);

// ここで AST を操作できます

const generatedCode = escodegen.generate(ast);
console.log(generatedCode); // 'const answer = 42;'
```

## API リファレンス

このフォークはオリジナルの `escodegen` API との互換性を維持しています。コード生成オプションの完全なリストについては、**[オリジナルの API ドキュメント](https://github.com/)** を参照してください。
