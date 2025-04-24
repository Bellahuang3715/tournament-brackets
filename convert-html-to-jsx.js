#!/usr/bin/env node
/**
 * convert-html-to-jsx.js
 *
 * Usage:
 *   node convert-html-to-jsx.js path/to/input.htm path/to/OutputComponent.jsx
 */

const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('htmltojsx');

// Grab CLI args
const [,, inputFile, outputFile] = process.argv;
if (!inputFile || !outputFile) {
  console.error('Usage: node convert-html-to-jsx.js <input.htm> <Output.jsx>');
  process.exit(1);
}

// 1) Read your .htm
const html = fs.readFileSync(inputFile, 'utf8');

// 2) Strip out <head>, scripts, excel-metadata, etc.
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
const innerHtml = bodyMatch ? bodyMatch[1] : html;

// 3) Convert to JSX
const converter = new HTMLtoJSX({ createClass: false });
let jsxCode = converter.convert(innerHtml);

// 4) Wrap in a functional component
const componentName = path.basename(outputFile).replace(/\..+$/, '');
const component = `import React from 'react';
import './${componentName}.css'; // adjust path as needed

export default function ${componentName}() {
  return (
    <>
${jsxCode.replace(/^/gm, '      ')}
    </>
  );
}
`;

fs.writeFileSync(outputFile, component, 'utf8');
console.log(`✅ Wrote ${outputFile}`);
