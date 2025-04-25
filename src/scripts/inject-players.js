// inject-players.js
const fs   = require('fs');
const path = require('path');

// Usage:
//   node inject-players.js input.jsx [output.jsx]
const [,, inputFile, outputFile] = process.argv;

if (!inputFile) {
  console.error('Usage: node inject-players.js <input.jsx> [output.jsx]');
  process.exit(1);
}

const srcPath = path.resolve(process.cwd(), inputFile);
const outPath = outputFile
  ? path.resolve(process.cwd(), outputFile)
  : srcPath;

// read in your component
let content = fs.readFileSync(srcPath, 'utf8');

// 1) replace all Bxx → {players[i].id}
let idIndex = 0;
content = content.replace(/>(B\w{2})</g, (_match, _id) => {
  return `>{players[${idIndex++}].id}<`;
});

// 2) replace "Firstname Lastname (CLUB)" → {`${players[i].name} (${players[i].club})`}
let nameIndex = 0;
content = content.replace(
  /([A-Za-z]+ [A-Za-z]+) \(([A-Za-z0-9]+)\)/g,
  () => {
    const i = nameIndex++;
    return (
      '{`' +
        '${players[' + i + '].name} (' +
        '${players[' + i + '].club})' +
      '`}'
    );
  }
);

// write back (either to a new file or in-place)
fs.writeFileSync(outPath, content, 'utf8');
console.log(`✅  ${outputFile ? 'Transformed' : 'Updated'} ${outPath}`);
