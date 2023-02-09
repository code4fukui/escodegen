import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";
//import escodegen from "https://code4fukui.github.io/escodegen/escodegen.js";
import escodegen from "./escodegen.js";

const program = "async () => { const answer = await func(); }"; // ok
//const program = "const answer = await func();"; // ng
//const program = "const answer = func();"; // no await
//const tokens = esprima.tokenize(program);
//console.log(tokens);
const ast = esprima.parseModule(program);
console.log(ast);
const ast2 = { type: "Program", body: ast.body[0].expression.body.body };
console.log(ast2)
const res = escodegen.generate(ast2);
console.log(res);
