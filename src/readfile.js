export function readFileLines(file) {
  const fs = require('fs');
  const readline = require('readline');
  return new Promise((resolve, reject) => {
    const fRead = fs.createReadStream(file);
    const objReadline = readline.createInterface({
      input: fRead,
    });
    const arr = new Array();
    objReadline.on('line', line => {
      arr.push(line);
    });
    objReadline.on('close', () => {
      resolve(arr);
    });
  });
}
