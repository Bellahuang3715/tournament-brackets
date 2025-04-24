#!/usr/bin/env node
const fs   = require('fs');
const path = require('path');

function processFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');
  let dst = src.replace(
    /className="([A-Za-z0-9_-]+)"/g,
    'className={styles.$1}'
  );
  if (dst !== src) {
    fs.writeFileSync(filePath, dst, 'utf8');
    console.log('→ updated', filePath);
  }
}

function walk(dir) {
  for (let name of fs.readdirSync(dir)) {
    let full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.match(/\.(jsx?|tsx?)$/)) processFile(full);
  }
}

// point this at your component folder:
walk(path.resolve(__dirname, '../components/9-Player'));
