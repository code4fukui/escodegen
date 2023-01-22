import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";

const program = "const res = await func()";
const ast = esprima.parseScript(program);
console.log(ast);
const res = escodegen.generate(ast);
console.log(res);
