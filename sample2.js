import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
//import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";
import escodegen from "./escodegen.js";

const program = "const answer = func();"
//const tokens = esprima.tokenize(program);
//console.log(tokens);
const ast = esprima.parseScript(program);
console.log(ast);
const res = escodegen.generate(ast);
console.log(res);
