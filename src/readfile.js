const fs = require('fs');
const readline = require('readline');

function readFileInLines(file) {
  const fRead = fs.createReadStream(file);
  const objReadline = readline.createInterface({
    input: fRead,
  });
  return objReadline;
}

export function readFileLines(file) {
  return new Promise(resolve => {
    const objReadline = readFileInLines(file);
    const arr = [];
    objReadline.on('line', line => arr.push(line));
    objReadline.on('close', () => resolve(arr));
  });
}
